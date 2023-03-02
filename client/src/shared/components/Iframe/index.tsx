import React from 'react';

interface IframeProps {
  src: string;
  className?: string;
  width?: string;
  height?: string;
  title?: string;
}

const Iframe: React.FunctionComponent<IframeProps> = ({
  src,
  className,
  width,
  height,
  title
}: IframeProps) => {
  return (
    <div>
      <iframe
        className={className}
        width={width}
        height={height}
        src={src}
        title={title}
      ></iframe>
    </div>
  );
};

Iframe.defaultProps = {
  className: 'mx-auto m-2',
  width: '100%',
  height: '600',
  title: 'Embbeded Content Material'
};

export default Iframe;
