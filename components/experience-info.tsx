import { FunctionComponent } from "react";
import { FormWrapper } from "./form-wrapper";

type userExperience = {
  experience: string;
  ctc: string;
  companyName: string;
};

type ExperienceInfoProps = userExperience & {
  updateFields: (fields: Partial<userExperience>) => void;
};

const ExperienceInfo: FunctionComponent<ExperienceInfoProps> = ({
  ctc,
  experience,
  companyName,
  updateFields,
}) => {
  return (
    <FormWrapper title="Experience Info">
      <div className="space-x-10">
        <label htmlFor="Experience">Experience in years</label>
        <input
          type="text"
          required
          value={experience}
          onChange={(e) => {
            updateFields({ experience: e.target.value });
          }}
          className="text-black"
          name="Experience"
          id="Experience"
        />
      </div>
      <div className="space-x-10">
        <label htmlFor="Salary">Salary per annum</label>
        <input
          type="text"
          required
          className="text-black"
          name="Salary"
          value={ctc}
          onChange={(e) => {
            updateFields({ ctc: e.target.value });
          }}
          id="Salary"
        />
      </div>
      <div className="space-x-10">
        <label htmlFor="Graduation">Company name</label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => {
            updateFields({
              companyName: e.target.value,
            });
          }}
          required
          className="text-black"
          name="Company_Name"
          id="Company_Name"
        />
      </div>
    </FormWrapper>
  );
};

export default ExperienceInfo;
