/* eslint-disable react/prop-types */
export default function FormInput(props) {
  return (
    <input
      type={props.text}
      name={props.name}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    ></input>
  );
}
