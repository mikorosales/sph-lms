import type { FC } from 'react';

interface ListIconProps {
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
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
      />
    </svg>
  );
};
export default ListIcon;
