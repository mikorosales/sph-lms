import React from 'react';

export interface Props {
  label?: string;
  placeholder?: string;
  width: number;
  height: number;
  className: string;
  resizable: boolean;
}

const Textfield: React.FC<Props> = ({
  label,
  placeholder,
  width,
  height,
  className,
  resizable
}: Props) => {
  return (
    <div className="p-5 h-auto w-auto">
      {label !== null && (
        <div>
          <label>{label}</label>
        </div>
      )}
      <textarea
        rows={height}
        cols={width}
        className={`${resizable ? 'resize' : 'resize:none'} ${className}`}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

Textfield.defaultProps = {
  label: '',
  placeholder: ''
};

export default Textfield;
