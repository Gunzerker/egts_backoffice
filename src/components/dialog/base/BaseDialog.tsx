import { Alert, Snackbar } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import BackofficeService from 'src/services/BackofficeService';
import { IUserMinimalData } from 'src/types/user.type';
import { FORM_VALIDATION, INITIAL_FORM_STATE } from './BaseDialog.hooks';
const emails = ['username@gmail.com', 'user02@gmail.com'];
export interface IBaseDialog {
  buttonTitle: string;
}
export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

function BaseDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;
  const [success, setSuccess] = useState(false);
  
  const router = useRouter();
  
  const handleClose = () => {
    setSuccess(false);
    
    onClose();
    window.location.reload();
  };

  const submitForm = async (values: { email: string; phone: string }) => {
    let user: IUserMinimalData = {
      email: formik.values.email,
      phone: formik.values.phone,
      firstName:formik.values.firstName,
      lastName: formik.values.lastName,
    };
    let res: any;
    console.log(user);
    res = await BackofficeService.createUser(user);
    if(res.data.statusCode === 200){
      
      setSuccess(true)
    }
    router.push('/users');
  };
  const formik = useFormik({
    initialValues: INITIAL_FORM_STATE,
    validationSchema: FORM_VALIDATION,
    onSubmit: submitForm,
  });
  return (
    <Dialog onClose={handleClose} open={open} maxWidth="sm" fullWidth>
      <center><DialogTitle>Ajouter un nouveau technicien</DialogTitle></center>
      <Box sx={{ width: '100%', p: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box width={'100%'} mb={2}>
            <Typography variant="body2">Email</Typography>
            <TextField
              fullWidth
              name="email"
              size="small"
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Box>

          <Box width={'100%'} mb={2}>
            <Typography variant="body2">Numéro de téléphone</Typography>
            <TextField
              fullWidth
              name="phone"
              size="small"
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Box>

          <Box width={'100%'} mb={2}>
            <Typography variant="body2">Prénom</Typography>
            <TextField
              fullWidth
              name="firstName"
              size="small"
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Box>
          
          <Box width={'100%'} mb={2}>
            <Typography variant="body2">Nom</Typography>
            <TextField
              fullWidth
              name="lastName"
              size="small"
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Box>
        </Box>
      </Box>
      <center><DialogActions>
      <Button onClick={() => formik.handleSubmit()}>Confirmer</Button>
      </DialogActions></center>
      <Snackbar open={success
      } autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Affecté avec succés
        </Alert>
      </Snackbar>
    </Dialog>
  );
}

export default BaseDialog;
