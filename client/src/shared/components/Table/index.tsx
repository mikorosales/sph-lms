import React from 'react';

interface TableProps<T> {
  header: string[];
  data: T[];
}

const Table: React.FC<TableProps<any>> = ({
  header,
  data
}: TableProps<any>) => {
  console.log(data);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {header.map((item, index) => (
              <th scope="col" className="px-6 py-3" key={index}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((col) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={col.id}
            >
              <td scope="row" className="px-6 py-4">
                {col.id}
              </td>
              <td className="px-6 py-4">{col.name}</td>
              <td className="px-6 py-4">{col.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.defaultProps = {};

export default Table;
