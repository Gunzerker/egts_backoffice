import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';

export interface IDialogForm {
  children?: React.ReactNode;
  buttonTitle: string;
}
function DialogForm(props: IDialogForm) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  return (
    <Box>
      <Button sx={{ width: '100%' }} onClick={handleClickOpen}>
        {props.buttonTitle}
      </Button>
      {props.children}
    </Box>
  );
}
export default DialogForm;
