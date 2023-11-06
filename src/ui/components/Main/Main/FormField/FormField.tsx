import React from "react";
interface FormType
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  labelName: string;
  isSurpriseMe?: boolean;
  handleSurpriseMe?: () => void;
}

export const FormField = ({
  labelName,
  isSurpriseMe,
  handleSurpriseMe,
  ...props
}: FormType) => (
  <div>
    <div>
      <label htmlFor={props.name}>{labelName}</label>
      {isSurpriseMe && (
        <button type="button" onClick={handleSurpriseMe}>
          Surprise me
        </button>
      )}
    </div>
    <input {...props} />
  </div>
);
