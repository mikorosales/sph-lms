import { useState } from 'react';

export interface collapseProps {
  label: string
  subLabel?: string
  children: React.ReactNode
};

const Collapse: React.FC<collapseProps> = ({
  label = 'Install Xampp',
  subLabel = 'Version 1 of 20',
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = (): void => {
    setIsOpen(!isOpen);
  };

  const arrowClasses = isOpen ? 'rotate-180 order-last' : 'order-last';

  return (
    <div>
      <div>
        <div
          className='bg-neutral-100 pb-2 pt-3 pb-4 rounded relative flex place-items-center justify-between'
          onClick={toggleCollapse}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-6 h-6 absolute ml-4 mt-1'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
            />
          </svg>

          <label className='ml-14 text-base'>{label}</label>
          <p className='text-xs ml-16 mt-8 absolute text-slate-400'>
            {subLabel}
          </p>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className={`w-5 h-5 ml-2 mr-3 ${arrowClasses} `}
            >
              <path
                fill-rule='evenodd'
                d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                clip-rule='evenodd'
              />
            </svg>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='bg-neutral-100 '>
          <hr className='border mx-7' />
          <div>{children}</div>
        </div>
      )}
    </div>
  );
};
export default Collapse;
