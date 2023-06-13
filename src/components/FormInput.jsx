/* eslint-disable react/prop-types */
const FormInput = ({
  text,
  name,
  id,
  placeholder,
  error,
  registration,
  defaultValue,
  ...rest
}) => {
  return (
    <>
      <input
        type={text}
        name={name}
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...registration}
        {...rest}
      ></input>
      {error?.message && (
        <span className="error" role="alert" aria-label={error.message}>
          {error.message}
        </span>
      )}
    </>
  );
};

export default FormInput;
