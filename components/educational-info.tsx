import { FunctionComponent } from "react";
import { FormWrapper } from "./form-wrapper";

type UserEducation = {
  hsc: string;
  ssc: string;
  graduation: string;
};

type EducationalInfoProps = UserEducation & {
  updateFields: (fields: Partial<UserEducation>) => void;
};

const EducationalInfo: FunctionComponent<EducationalInfoProps> = ({
  hsc,
  ssc,
  graduation,
  updateFields,
}) => {
  // const info = [
  //   { id: 1, name: "SSC" },
  //   { id: 2, name: "HSC" },
  //   { id: 3, name: "Graduation" },
  // ];
  return (
    <FormWrapper title="Educztional Info">
      <div className="space-x-10">
        <label htmlFor="SSC">SSC %</label>
        <input
          type="text"
          required
          className="text-black"
          value={ssc}
          name="SSC"
          onChange={(e) => {
            updateFields({ ssc: e.target.value });
          }}
          id="SSC"
        />
      </div>
      <div className="space-x-10">
        <label htmlFor="HSC">HSC %</label>
        <input
          value={hsc}
          type="text"
          required
          className="text-black"
          onChange={(e) => {
            updateFields({ hsc: e.target.value });
          }}
          name="HSC"
          id="HSC"
        />
      </div>
      <div className="space-x-10">
        <label htmlFor="Graduation">Graduation %</label>
        <input
          type="text"
          value={graduation}
          required
          onChange={(e) => {
            updateFields({ graduation: e.target.value });
          }}
          className="text-black"
          name="Graduation"
          id="Graduation"
        />
      </div>
      {/* {info.map((data: any) => {
        return (
          <div key={data.id} className="space-x-10">
            <label htmlFor={data.name}>{data.name}</label>
            <input
              type={data.name === "Graduation" ? "text" : "number"}
              className="text-black"
              min={0}
              max={100}
              name={data.name}
              id={data.name}
            />
          </div>
        );
      })} */}
    </FormWrapper>
  );
};

export default EducationalInfo;
