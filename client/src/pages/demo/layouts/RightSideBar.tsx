import React from 'react';
import RightSideBar from '@/src/shared/layouts/Right Side Bar/RightSideBar';

const RightSideBarLayout: React.Component = () => {
  return (
    <RightSideBar >
      <div className="flex justify-center items-center h-screen bg-red-50">
        Right Side Bar Layout
      </div>
    </RightSideBar>
  );
};

export default RightSideBarLayout;
