/* eslint-disable react/prop-types */

export function Button(props) {
  return (
    <button
      type={props.type}
      name={props.name}
      value={props.value}
      onClick={props.onClick}
    >
      {props.number}%
    </button>
  );
}
