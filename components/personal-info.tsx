import { FunctionComponent } from "react";
import { FormWrapper } from "./form-wrapper";

type UserPersonalInfo = {
  name: string;
  email: string;
  number: string;
};

type PersonalInfoProps = UserPersonalInfo & {
  updateFields: (fields: Partial<UserPersonalInfo>) => void;
};

const PersonalInfo: FunctionComponent<PersonalInfoProps> = ({
  name,
  email,
  number,
  updateFields,
}) => {
  return (
    <FormWrapper title="Personal Info">
      <div className="space-x-10">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          required
          className="text-black"
          name="name"
          value={name}
          id="name"
          onChange={(e) => {
            updateFields({ name: e.target.value });
          }}
        />
      </div>
      <div className="space-x-10">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          required
          className="text-black"
          name="email"
          value={email}
          onChange={(e) => {
            updateFields({ email: e.target.value });
          }}
          id="email"
        />
      </div>
      <div className="space-x-10">
        <label htmlFor="number">Number</label>
        <input
          type="text"
          required
          value={number}
          className="text-black"
          name="number"
          onChange={(e) => {
            updateFields({ number: e.target.value });
          }}
          id="number"
        />
      </div>
    </FormWrapper>
  );
};

export default PersonalInfo;
