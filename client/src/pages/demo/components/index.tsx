/* eslint-disable react/no-unescaped-entities */
import Searchbar from '@/src/shared/components/SearchBar/SearchBar';
import SideBar from '@/src/shared/components/SideBar/SideBar';

import { Fragment } from 'react';

interface componentsProps {
  onSearch: string;
}

const Components: React.FunctionComponent<componentsProps> = () => {
  return (
    <Fragment>
      <div className='p-4 border-b border-black space-y-4'>
        <Searchbar onSearchEvent='string' />
        <div className='mt-1.5'>
          <h1 className='font-semibold'>Props: </h1>
          <div className='bg-gray-300 p-1.5'>
            <p>onSearchEvent = (string)[""] ex. onSearchEvent="string" </p>
            <p>height = (string)[auto] ex. height="50px"</p>
            <p>width = (string)[auto] ex. width="100px"</p>
          </div>
        </div>
      </div>

      <div className='p-4 border-b border-black'>
        <SideBar />
        <div className='mt-[5px]'>
          <h1>Props: </h1>

          <div className='bg-gray-300 p-[5px]'>
            <p>no props yet</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Components;
