import { FormHelperText } from '@mui/material';

export interface IInputErrors {
  display?: boolean;
  text?: string;
}

const InputErrors: React.FC<IInputErrors> = ({ display, text }) => {
  return (
    <>
      {display ? (
        <FormHelperText error id="my-helper-text">
          {text}
        </FormHelperText>
      ) : null}
    </>
  );
};

export default InputErrors;
