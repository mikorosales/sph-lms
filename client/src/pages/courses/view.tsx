import Checkbox from '@/src/shared/components/Checkbox';
import Dropdown from '@/src/shared/components/Dropdown';
import Radiobutton from '@/src/shared/components/Radiobutton';
import SearchBar from '@/src/shared/components/SearchBar/SearchBar';
import GridIcon from '@/src/shared/icons/GridIcon';
import ListIcon from '@/src/shared/icons/ListIcon';
import { LeftSideBar } from '@/src/shared/layouts/RightSideBar/LeftSideContainer';
import { RightSideBar } from '@/src/shared/layouts/RightSideBar/RightSideBar';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import type { ReactNode } from 'react';

const View = (): ReactNode => {
  const [view, setView] = useState('grid');
  const sample = ['a', 'b', 'c'];
  const handleView = (view: string): void => {
    setView(view);
  };
  return (
    <Fragment>
      <div className="">
        <div className="flex flex-row ">
          <LeftSideBar>
            <div className="text-xl pl-5 pt-20 text-blue-500"> Courses</div>
            <div className="pl-5 pt-10">
              <SearchBar
                height="50px"
                width="100px"
                onSearchEvent={() => {}}
              ></SearchBar>
              <div className="pt-5 flex flex-row justify-between">
                <div className="">
                  <Dropdown
                    label="Sort by Name Ascending"
                    options={[
                      { text: 'Option 1', url: '' },
                      { text: 'Option 2', url: '' }
                    ]}
                    classNames="border-solid border-gray-300"
                  ></Dropdown>
                </div>
                <div className="flex flex-row space-x-3 pr-3">
                  <div
                    onClick={() => {
                      handleView('list');
                    }}
                    className="flex justify-end cursor-pointer hover:bg-blue-500"
                  >
                    <ListIcon></ListIcon>
                  </div>
                  <div
                    className="flex justify-end cursor-pointer hover:bg-blue-500"
                    onClick={() => {
                      handleView('grid');
                    }}
                  >
                    <GridIcon></GridIcon>
                  </div>
                </div>
              </div>
              <div className="">
                {view === 'grid'
                  ? (
                        <div className="grid grid-cols-3 ">
                            {sample.map((sample, index) => (
                            <div key={index} className="m-3">
                                <div className="">
                                <div className="h-56  bg-white flex flex-col drop-shadow-lg">
                                    <div className=" flex justify-center items-center">
                                    <Image
                                        src="/image1.jpg"
                                        alt=""
                                        height={150}
                                        width={180}
                                        className="justify-center"
                                    ></Image>
                                    </div>
                                    <div className=" flex justify-center text-xl pt-2">
                                    {' '}
                                    Title{' '}
                                    </div>
                                    <div className='space-y-2'>
                                    <div className="w-16 bg-gray-300 rounded-lg ">
                                    General
                                    </div>
                                    <div className="w-28 bg-gray-300 rounded-lg ">03-01-2023</div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    )
                  : (
                        <div className="flex flex-col ">
                            {sample.map((sample, index) => (
                            <div key={index} className="m-3">
                                <div className=" flex flex-row h-32 w-auto bg-white drop-shadow-lg space-x-20">
                                <div className="flex items-center pl-20">
                                    <Image
                                    src="/image1.jpg"
                                    alt=""
                                    width={150}
                                    height={150}
                                    className="justify-center"
                                    ></Image>
                                </div>
                                <div className="flex flex-col space-y-5">
                                    <div className="text-xl pt-3">Title</div>
                                    <div className="flex flex-col space-y-2 ">
                                    <div className="bg-gray-300 rounded-lg flex justify-center">
                                        {' '}
                                        General{' '}
                                    </div>
                                    <div className="bg-gray-300 rounded-lg flex justify-center">
                                        {' '}
                                        03-01-2023
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    )}
              </div>
            </div>
          </LeftSideBar>
          <RightSideBar>
            <div className="pt-20 text-xl font-bold">Course Status</div>
            <hr className="bg-gray-500"></hr>
            <Radiobutton
              options={['Option1', 'Option 2', 'Option 3']}
              onClickEvent={() => {}}
            ></Radiobutton>
            <br />
            <div className="text-xl font-bold">Category</div>
            <hr className="bg-gray-500"></hr>
            <Checkbox
              options={['Option1', 'Option 2', 'Option 3']}
              onClickEvent={() => {}}
            ></Checkbox>
          </RightSideBar>
        </div>
      </div>
    </Fragment>
  );
};

export default View;
