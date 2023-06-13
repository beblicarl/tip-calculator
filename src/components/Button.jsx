/* eslint-disable react/prop-types */

export function Button({ type, name, registration, onClick, number, ...rest }) {
  return (
    <button
      type={type}
      name={name}
      onClick={onClick}
      {...registration}
      {...rest}
      defaultValue={number}
    >
      {number}%
    </button>
  );
}
