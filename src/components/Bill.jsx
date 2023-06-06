import FormInput from "./FormInput";

/* eslint-disable react/prop-types */
export default function Bill(props) {
  return (
    <div className="bill">
      <p>Bill</p>
      <FormInput
        type={props.type}
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      ></FormInput>
    </div>
  );
}
