/* eslint-disable react/jsx-key */
import EducationalInfo from "@/components/educational-info";
import ExperienceInfo from "@/components/experience-info";
import PersonalInfo from "@/components/personal-info";
import useMultiStepForm from "@/hooks/useMultiStepForm";
import { FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface InitialDataType {
  name: string;
  email: string;
  number: string;
  ssc: string;
  hsc: string;
  graduation: string;
  companyName: string;
  ctc: string;
  experience: string;
}

const InitialData: InitialDataType = {
  name: "",
  email: "",
  number: "",
  ssc: "",
  hsc: "",
  graduation: "",
  companyName: "",
  ctc: "",
  experience: "",
};

export default function Home() {
  const [data, setData] = useState(InitialData);
  function updateFields(fields: Partial<InitialDataType>) {
    setData((prev) => ({ ...prev, ...fields }));
  }
  const {
    step,
    isLastStep,
    isFirstStep,
    steps,
    currentStepIndex,
    Next,
    Back,
    Goto,
  } = useMultiStepForm([
    <PersonalInfo {...data} updateFields={updateFields} />,
    <EducationalInfo {...data} updateFields={updateFields} />,
    <ExperienceInfo {...data} updateFields={updateFields} />,
  ]);

  const HandleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isLastStep) {
      toast("Data received succesfully");
    }
    Next();
  };

  return (
    <div className="w-screen h-screen flex items-center">
      <form
        onSubmit={HandleSubmit}
        className=" w-[800px] h-[700px] mx-auto border relative rounded-md"
      >
        <div className="w-[800px] h-[600px] border-b">{step}</div>
        <div className="absolute space-x-5 text-lg bottom-7 right-7">
          {!isFirstStep && (
            <button
              type="button"
              onClick={Back}
              className="border rounded-md px-5 py-2 "
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className="border rounded-md px-5 py-2 "
            value={!isLastStep ? "Next" : "Finish"}
          >
            {!isLastStep ? "Next" : "Finish"}
          </button>
          <ToastContainer />
        </div>
        <div className="absolute text-lg top-10 rounded-full border-4 w-16 flex items-center justify-center h-16 right-10">
          {currentStepIndex + 1} / {steps.length}
        </div>
      </form>
    </div>
  );
}
