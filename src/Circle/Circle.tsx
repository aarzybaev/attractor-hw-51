import React from 'react';

interface Props extends React.PropsWithChildren {
  number: number
}

const Circle: React.FC<Props> = props => {
  return (
    <div className="number">{props.number}</div>
  );
};

export default Circle;