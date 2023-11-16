import React from "react";
import {styles} from './FormField.styles.ts';

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
}: FormType) => {
  const classes = styles();

  return(
    <div css={classes.container}>
    <div>
      <label htmlFor={props.name}>{labelName}</label>
      {isSurpriseMe && (
        <button type="button" onClick={handleSurpriseMe}>
          Surprise me
        </button>
      )}
    </div>
    <input css={classes.input} {...props} />
  </div>
);}
