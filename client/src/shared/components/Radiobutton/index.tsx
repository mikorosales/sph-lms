import React, { useState, Fragment } from 'react';
import type { FC } from 'react';

export interface Props {
  label?: string;
  options: string[];
  alignment?: string;
  classname?: string;
  onClickEvent: (query: string) => void;
}

<<<<<<< Updated upstream
const Radiobutton: React.FC<Props> = ({
  label,
  options,
  alignment,
  classname,
  onClickEvent
}: Props) => {
  const [chosenOption, setChosenOption] = React.useState('');
=======
const RadioButton: FC<Props> = ({ label, options, alignment, classname, onClickEvent }: Props) => {
  const [selectedOption, setSelectedOption] = useState('');
>>>>>>> Stashed changes
  const handleOnClick = (value: any): void => {
    setSelectedOption(value);
    console.log(selectedOption);
  };
  return (
    <Fragment>
      {label !== null && (
        <div className="pb-2">
          <label className={classname}>{label}</label>
        </div>
      )}
      <div
        className={`${
          alignment === 'horizontal' ? 'flex flex-row' : 'flex flex-col'
        }`}
      >
        {options.map((option, index) => (
          <div key={index} className="flex flex-row space-x-2 pr-4 pb-2">
            <input
              className={classname}
              type="radio"
              value={option}
<<<<<<< Updated upstream
              checked={chosenOption.includes(option)}
              onClick={() => {
                // sample of onclickevent
=======
              checked={selectedOption.includes(option)}
              onClick={() => { // sample of onclickevent
>>>>>>> Stashed changes
                handleOnClick(`${option}`);
              }}
            ></input>
            <div className={classname}>{option}</div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

RadioButton.defaultProps = {
  label: '',
  alignment: 'vertical',
  classname: ''
};
export default RadioButton;
