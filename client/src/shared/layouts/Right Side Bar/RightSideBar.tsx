import React from 'react';

interface rightSideBarProps {
  children: any
}

const RightSideBar: React.FunctionComponent<rightSideBarProps> = ({
  children
}: rightSideBarProps) => {
  return (
    <div className='sidebar fixed top-0 bottom-0 right-20 bg-gray-400 w-80 mr-12 ml-6 '>
      {children}
    </div>
  );
};

export default RightSideBar;
