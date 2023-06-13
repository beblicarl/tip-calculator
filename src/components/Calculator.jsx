import { useState } from "react";
import { useForm } from "react-hook-form";
import Bill from "./Bill";
import SelectTip from "./SelectTip";
import NumberOfPeople from "./People";
import Amount from "./Amount";

export default function Calculator() {
  const [formData, setFormData] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const [totalAmount, setTotalAmount] = useState(0.0);
  const [tipAmount, setTipAmount] = useState(0.0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (formData) => {
    setFormData(formData);
    console.log(formData, "formData");
    setIsSubmitted(true);
    const amount = Number(formData.buttonField) + Number(formData.custom);

    const calculate = (Number(formData.bill) * amount) / 100;

    const totalData = calculate / Number(formData.people);

    const tipTotal =
      (Number(formData.bill) + calculate) / Number(formData.people);
    setTipAmount(totalData);
    setTotalAmount(tipTotal);
  };

  const handleRefresh = () => {
    setTipAmount(0.0);
    setTotalAmount(0.0);
    setIsSubmitted(false);
    reset();
  };

  const handleButtonClick = (value) => {
    setValue("buttonField", value);
  };

  return (
    <div>
      <h2>
        Spli
        <br />
        tter
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-fields">
          <Bill
            type="text"
            name="bill"
            id="bill"
            error={errors.bill}
            registration={register("bill", {
              required: "Field can't be empty",
              min: {
                value: 1,
                message: "Can't be zero",
              },
            })}
          />
          <SelectTip
            formData={formData}
            setFormData={setFormData}
            register={register}
            handleButtonClick={handleButtonClick}
          />

          <NumberOfPeople
            type="text"
            name="people"
            id="people"
            error={errors.people}
            registration={register("people", {
              required: "Field can't be empty",
              min: {
                value: 1,
                message: "Can't be zero",
              },
            })}
          />
        </div>
        <Amount
          tipAmount={tipAmount}
          totalAmount={totalAmount}
          handleRefresh={handleRefresh}
          isSubmitted={isSubmitted}
          onSubmit={onSubmit}
        />
      </form>
    </div>
  );
}
