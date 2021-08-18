import React from 'react';

type SquareProps = {
  value: number;
};

function Square(props: SquareProps): JSX.Element {
  return <button className="square">{props.value}</button>;
}

export default Square;
