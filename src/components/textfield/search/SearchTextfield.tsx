import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        color: 'white',
      },
    },
  },
}));
export interface ISearchTextfield {
  sampleTextProp?: String;
}
type CustomOutlinedTextFieldProps = {
  [key: string]: any; // allow any other props to be passed
};

function SearchTextfield(props: CustomOutlinedTextFieldProps) {
  const classes = useStyles();
  return (
    <TextField
      size="small"
      className={classes.root}
      defaultValue="Search"
      variant="outlined"
      {...props}
    />
  );
}

export default SearchTextfield;
