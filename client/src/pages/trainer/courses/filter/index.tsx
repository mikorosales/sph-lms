import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';

import Card from '@/src/shared/components/Card';
import Checkbox from '@/src/shared/components/Checkbox';
import RadioButton from '@/src/shared/components/RadioButton';
import api from '@/src/apis';

import { LeftSideBar } from '@/src/shared/layouts/RightSideBar/LeftSideContainer';
import { RightSideBar } from '@/src/shared/layouts/RightSideBar/RightSideBar';

export interface Category {
  id: number;
  name: string;
}

export interface Course {
  id: number;

  title: string;
  description: string;
  course_category: number;
  is_active: boolean;
}

const CoursesPage: NextPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<boolean>(true);

  const [course, setCourse] = useState<Course[]>([]);
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchdata(): Promise<void> {
      try {
        const course = await api.get<Course[]>('course');
        const category = await api.get<Category[]>('course-category');
        setCourse(course.data);
        setCategory(category.data);
      } catch (error) {
        console.error(error);
      }
    }
    void fetchdata();
  }, []);

  const handleCategoryChange = (id: number): void => {
    // console.log('Selected category ID:', id * -1 + 1);
    setSelectedCategories((prevSelectedCategories) => {
      const isSelected = prevSelectedCategories.includes(id * -1 + 1);
      // console.log('Prev selected categories:', prevSelectedCategories);
      // console.log('Is category already selected?', isSelected);
      const updatedSelectedCategories = isSelected
        ? prevSelectedCategories.filter((c) => c !== id * -1 + 1)
        : [...prevSelectedCategories, id * -1 + 1];
      // console.log('Updated selected categories:', updatedSelectedCategories);
      return updatedSelectedCategories;
    });
  };

  const handleStatusChange = (status: boolean): void => {
    setSelectedStatus(status);
    console.log('Selected status:', selectedStatus);
  };

  const filteredCourses = course.filter((course) => {
    const isCourseInSelectedCategories =
      selectedCategories.length === 0 ||
      selectedCategories.includes(course.course_category);
    const isCourseActive = course.is_active;
    const shouldIncludeCourse =
      (selectedStatus && isCourseActive) ||
      (!selectedStatus && !isCourseActive);

    return isCourseInSelectedCategories && shouldIncludeCourse;
  });

  return (
    <>
      <LeftSideBar>
        {filteredCourses.length === 0 ? (
          <p>No courses available for the selected category.</p>
        ) : (
          <div className="grid grid-cols-3">
            {filteredCourses.map((course) => (
              <div key={course.id} className="m-2">
                <Card title={course.title} height="h-50">
                  <p>{course.description}</p>
                </Card>
              </div>
            ))}
          </div>
        )}
      </LeftSideBar>
      <RightSideBar>
        <h1 className="text-xl font-bold">Course Status</h1>
        <br />
        <hr />
        <RadioButton
          options={['Active', 'Inactive']}
          selectedOption={selectedStatus}
          onOptionChange={(option) => {
            handleStatusChange(option === 'Active');
          }}
        />
        <br />
        <h1 className="text-xl font-bold">Category</h1>
        <br />
        <hr />
        <Checkbox
          options={category.map((category) => category.name)}
          selectedOptions={selectedCategories}
          onOptionChange={handleCategoryChange}
          className=""
        />
      </RightSideBar>
    </>
  );
};

export default CoursesPage;
