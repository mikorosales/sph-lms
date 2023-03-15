import type { FC } from 'react';
import Image from 'next/image';

export interface TypeOfViewProps {
  typeOfView: string;
  data: string[];
}

const ViewAs: FC<TypeOfViewProps> = ({ typeOfView, data }: TypeOfViewProps) => {
  return (
    <>
      {typeOfView === 'grid'
        ? (
        <div className="grid grid-cols-3 ">
          {data.map((data, index) => (
            <div key={index} className="m-3 drop-shadow-lg h-80 border-2 flex justify-between">
                <div className=" bg-white flex flex-col ">
                  <div className="h-44 flex justify-center border-2 border-lightGray">
                    <Image
                      src="/image1.jpg"
                      alt=""
                      height={200}
                      width={200}
                      className="justify-center"
                    ></Image>
                  </div>
                  <div className='flex flex-col justify-between h-36'>
                    <div className="hover:underline pt-2 mx-8 text-2xl h-auto w-56 font-semibold break-normal">
                      Title
                    </div>
                    <div className="space-y-2 pb-4">
                      <div className="inline-block bg-blueGray rounded-lg mx-8 text-lightBlue pl-2 pr-2">General</div>
                      <div className="inline-block bg-blueGray rounded-lg mx-8 text-lightBlue pl-2 pr-2">
                        03-01-2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
          )
        : (
        <div>
          {data.map((data, index) => (
            <div key={index} className="m-3">
              <div className=" flex flex-row h-36 w-auto bg-white drop-shadow-lg space-x-20 ">
                <div className='p-4'>
                  <div className="flex justify-center h-28 w-64 border-2 border-lightGray ">
                    <Image
                      src="/image1.jpg"
                      alt=""
                      width={150}
                      height={150}
                      className="justify-center"
                    ></Image>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="text-2xl hover:underline pt-4 font-semibold break-normal inline-block">
                    Title
                  </div>
                  <div className="flex flex-col space-y-2 pb-4">
                    <div className='flex-wrap'>
                      <div className="inline-block bg-blueGray text-lightBlue rounded-lg  pl-2 pr-2">
                        General
                      </div>
                    </div>
                    <div className='flex flex-wrap'>
                      <div className=" bg-blueGray text-lightBlue rounded-lg  pl-2 pr-2">
                        03-01-2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
          )}
    </>
  );
};

export default ViewAs;
