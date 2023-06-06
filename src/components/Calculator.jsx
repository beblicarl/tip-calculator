import { useState } from "react";
import { useForm } from "react-hook-form";
import Bill from "./Bill";
import SelectTip from "./SelectTip";
import NumberOfPeople from "./People";
import Amount from "./Amount";

export default function Calculator() {
  const [formData, setFormData] = useState({
    bill: 0,
    custom: "",
    fivePercent: 0,
    tenPercent: 0,
    fifteenPercent: 0,
    twentyfivePercent: 0,
    fiftyPercent: 0,
    people: 0,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [totalAmount, setTotalAmount] = useState(0.0);
  const [tipAmount, setTipAmount] = useState(0.0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleTotalAmount = () => {
    const amount =
      formData.fivePercent +
      formData.tenPercent +
      formData.fifteenPercent +
      formData.twentyfivePercent +
      formData.fiftyPercent +
      Number(formData.custom);

    const calculate = (Number(formData.bill) * amount) / 100;
    const totalData = calculate / Number(formData.people);
    console.log(totalData);
    setTipAmount(totalData);
    const tipTotal =
      (Number(formData.bill) + calculate) / Number(formData.people);
    setTotalAmount(tipTotal);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // submitToApi(formData)
  //   if (formData.people > 0) {
  //     console.log(formData);
  //     setIsSubmitted(true);
  //     console.log(isSubmitted);
  //   } else {
  //     console.log("People field can't be left empty");
  //     return;
  //   }
  // };

  const onSubmit = () => {
    console.log(formData);
    setIsSubmitted(true);
  };

  const handleRefresh = () => {
    setFormData((prevData) => {
      return {
        ...prevData,
        bill: 0,
        custom: "",
        fivePercent: 0,
        tenPercent: 0,
        fifteenPercent: 0,
        twentyfivePercent: 0,
        fiftyPercent: 0,
        people: 0,
      };
    });
    setIsSubmitted(false);
    setTipAmount(0.0);
    setTotalAmount(0.0);
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
            value={formData.bill}
            onChange={handleChange}
          />
          <SelectTip
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />

          <NumberOfPeople
            type="text"
            name="people"
            id="people"
            value={formData.people}
            onChange={handleChange}
            errors={errors}
            register={register}
          />
        </div>
        <Amount
          tipAmount={tipAmount}
          totalAmount={totalAmount}
          handleTotalAmount={handleTotalAmount}
          handleRefresh={handleRefresh}
          isSubmitted={isSubmitted}
        />
      </form>
    </div>
  );
}
