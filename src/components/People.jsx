import FormInput from "./FormInput";

/* eslint-disable react/prop-types */
export default function NumberOfPeople(props) {
  return (
    <div className="people-number">
      <p>Number of People</p>
      <FormInput
        {...props.register(props.name, { required: true, min: 1 })}
        type={props.type}
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      ></FormInput>
      {props.errors.people && <span>This field is required</span>}
    </div>
  );
}
