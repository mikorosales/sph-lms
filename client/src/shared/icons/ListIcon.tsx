/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type { FC } from 'react';

export interface ListIconProps {
  height?: number,
  width?: number,
  children?: string
}

const ListIcon: FC<ListIconProps> = ({ height, width, children }: ListIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="black"
      className={`w-${width} h-${height} ${children}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
      />
    </svg>
  );
};

ListIcon.defaultProps = {
  height: 6,
  width: 6,
  children: ''
};

export default ListIcon;
