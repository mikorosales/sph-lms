import type { GetStaticProps, NextPage } from 'next';
import type { FC } from 'react';
import { useState } from 'react';
import Card from '@/src/shared/components/Card';
import { LeftSideBar } from '@/src/shared/layouts/RightSideBar/LeftSideContainer';
import { RightSideBar } from '@/src/shared/layouts/RightSideBar/RightSideBar';
import Checkbox from '@/src/shared/components/Checkbox';

interface Category {
  id: number;
  name: string;
}

interface Course {
  id: number;
  title: string;
  description: string;
  course_category: number;
}

interface Props {
  categories: Category[];
  courses: Course[];
}

const CoursesList: FC<Props> = ({ categories, courses }) => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const handleCategoryChange = (course_category: number): void => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(course_category)) {
        return prevSelectedCategories.filter((c) => c !== course_category);
      } else {
        return [...prevSelectedCategories, course_category];
      }
    });
  };

  const filteredCourses = courses.filter((course) => {
    if (selectedCategories.length === 0) {
      return true;
    } else {
      return selectedCategories.includes(course.course_category);
    }
  });

  return (
    <>
      <LeftSideBar>
        <div className="grid grid-cols-3">
          {filteredCourses.map((course) => (
            <div key={course.id} className="m-2">
              <Card title={course.title} height="h-50">
                <p>{course.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </LeftSideBar>
      <RightSideBar>
        <h1 className="text-xl">Course Status</h1>
        <br />
        <hr />
        <br />
        <br />
        <h1 className="text-xl">Category</h1>
        <br />
        <hr />
        <Checkbox
          options={categories.map((category) => category.name)}
          selectedOptions={selectedCategories}
          onOptionChange={handleCategoryChange}
        />
      </RightSideBar>
    </>
  );
};

const CoursesPage: NextPage<Props> = ({ categories, courses }) => {
  return <CoursesList categories={categories} courses={courses} />;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const coursesRes = await fetch(
    'http://127.0.0.1:8000/api/course/'
  );
  const courses: Course[] = await coursesRes.json();

  const categoriesRes = await fetch(
    'http://127.0.0.1:8000/api/course-category/'
  );
  const categories: Category[] = await categoriesRes.json();

  return {
    props: { categories, courses }
  };
};

export default CoursesPage;
