/* eslint-disable react/prop-types */
import { Button } from "./Button";
import FormInput from "./FormInput";

export default function SelectTip(props) {
  return (
    <div className="select-tip">
      <p>Select Tip %</p>
      <div className="select-tip-children">
        <Button
          registration={props.register("buttonField")}
          type="button"
          name="buttonField"
          id="buttonField"
          defaultValue={5}
          number={5}
          onClick={() => props.handleButtonClick(5)}
        >
          5%
        </Button>

        <Button
          registration={props.register("buttonField")}
          type="button"
          name="buttonField"
          id="buttonField"
          defaultValue={10}
          onClick={() => props.handleButtonClick(10)}
          number={10}
          placeholder={10}
        ></Button>

        <Button
          registration={props.register("buttonField")}
          type="button"
          name="buttonField"
          id="buttonField"
          defaultValue={15}
          onClick={() => props.handleButtonClick(15)}
          number={15}
          placeholder={15}
        >
          15%
        </Button>

        <br />
        <br />
        <Button
          registration={props.register("buttonField")}
          type="button"
          name="buttonField"
          id="buttonField"
          defaultValue={25}
          onClick={() => props.handleButtonClick(25)}
          number={25}
          placeholder={25}
        >
          25%
        </Button>

        <Button
          registration={props.register("buttonField")}
          type="button"
          name="buttonField"
          id="buttonField"
          defaultValue={50}
          onClick={() => props.handleButtonClick(50)}
          number={50}
          placeholder={50}
        >
          50%
        </Button>

        <FormInput
          registration={props.register("custom")}
          type="text"
          name="custom"
          id="custom"
          placeholder="Custom"
        ></FormInput>
      </div>
    </div>
  );
}
