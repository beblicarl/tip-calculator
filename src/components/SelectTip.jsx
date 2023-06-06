/* eslint-disable react/prop-types */
import { Button } from "./Button";
import FormInput from "./FormInput";

export default function SelectTip(props) {
  const handlefive = () => {
    props.setFormData((prevData) => {
      return { ...prevData, fivePercent: 5 };
    });
  };
  const handleten = () => {
    props.setFormData((prevData) => {
      return { ...prevData, tenPercent: 10 };
    });
  };
  const handlefifteen = () => {
    props.setFormData((prevData) => {
      return { ...prevData, fifteenPercent: 15 };
    });
  };
  const handletweentyfive = () => {
    props.setFormData((prevData) => {
      return { ...prevData, twentyfivePercent: 25 };
    });
  };
  const handlefifty = () => {
    props.setFormData((prevData) => {
      return { ...prevData, fiftyPercent: 50 };
    });
  };

  return (
    <div className="select-tip">
      <p>Select Tip %</p>
      <div className="select-tip-children">
        <Button
          type="button"
          name="fivePercent"
          value={props.formData.fivePercent}
          onClick={handlefive}
          number={5}
        >
          5%
        </Button>

        <Button
          type="button"
          name="tenPercent"
          value={props.formData.tenPercent}
          onClick={handleten}
          number={10}
        >
          10%
        </Button>

        <Button
          type="button"
          name="fifteenPercent"
          value={props.formData.fifteenPercent}
          onClick={handlefifteen}
          number={15}
        >
          15%
        </Button>

        <br />
        <br />
        <Button
          type="button"
          name="twentyfivePercent"
          value={props.formData.twentyfivePercent}
          onClick={handletweentyfive}
          number={25}
        >
          25%
        </Button>

        <Button
          type="button"
          name="fiftyPercent"
          value={props.formData.fiftyPercent}
          onClick={handlefifty}
          number={50}
        >
          50%
        </Button>

        <FormInput
          type="text"
          name="custom"
          id="custom"
          value={props.formData.custom}
          onChange={props.handleChange}
          placeholder="Custom"
        ></FormInput>
      </div>
    </div>
  );
}
