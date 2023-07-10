import { Grid, Switch } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { DateTimePicker } from '@mui/x-date-pickers';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import BackofficeService from 'src/services/BackofficeService';
import { FORM_VALIDATION, INITIAL_FORM_STATE } from './TaskDialog.hooks';
export interface ITaskDialog {
  buttonTitle: string;
}
export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function TaskDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [enabled4Fo, setEnabled4Fo] = useState(false)
  const [enabled32Fo, setEnabled32Fo] = useState(false)
  const [enabledDevis, setEnabledDevis] = useState(false)

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  }
  const handleClose = () => {
    onClose();
  };
  const handleClick = () => {
    setOpenSnackbar(true);
    handleCloseSnackbar
  };

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    onClose();
    setOpenSnackbar(false);
    window.location.reload();
  };

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
    formik.handleChange;
    console.log(formik.values.four_fo);
  };
  const submitForm = async (values: {
    site_name: string;
    reference: string;
    operateur: string;
    adress: string;
    contact_client: string;
    chambre: string;
    bpe: string;
    add_info: string;
    devis_av: boolean;
    four_fo: boolean;
    thirty_fo: boolean;
    site_raccord: boolean;
  }) => {
    const formData = new FormData();
    formData.append('plan', file as Blob);
    formData.append('site_name', formik.values.site_name);
    formData.append('reference', formik.values.reference);
    formData.append('operateur', formik.values.operateur);
    formData.append('adress', formik.values.adress);
    formData.append('contact_client', formik.values.contact_client);
    formData.append('chambre', formik.values.chambre);
    formData.append('bpe', formik.values.bpe);
    formData.append('add_info', formik.values.add_info);
    formData.append('devis_av', formik.values.devis_av.toString());
    formData.append('four_fo', formik.values.four_fo.toString());
    formData.append('thirty_fo', formik.values.thirty_fo.toString());
    formData.append('start_date', formik.values.start_date.toISOString());
    formData.append('end_date', formik.values.end_date.toISOString());
    // formData.append('assignedTo', formik.values.assignedTo.toString());
    let res: any;
    res = await BackofficeService.createJob(formData);
    if (res.data.statusCode === 201) {
      handleClick();
    }
  };
  const formik = useFormik({
    initialValues: INITIAL_FORM_STATE,
    validationSchema: FORM_VALIDATION,
    onSubmit: submitForm,
  });
  return (
    <Dialog onClose={handleClose} open={open} maxWidth="sm" fullWidth>
      <DialogTitle>Creation Intervention/Tache</DialogTitle>
      <Box sx={{ width: '100%', p: 1 }}>
        <Grid container maxWidth={'100%'} spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body2">Nom Site</Typography>
            <TextField
              fullWidth
              name="site_name"
              size="small"
              onChange={formik.handleChange}
              error={
                formik.touched.site_name && Boolean(formik.errors.site_name)
              }
              helperText={formik.touched.site_name && formik.errors.site_name}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Reference</Typography>
            <TextField
              fullWidth
              name="reference"
              size="small"
              onChange={formik.handleChange}
              error={
                formik.touched.reference && Boolean(formik.errors.reference)
              }
              helperText={formik.touched.reference && formik.errors.reference}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Operateur</Typography>
            <TextField
              fullWidth
              name="operateur"
              size="small"
              onChange={formik.handleChange}
              error={
                formik.touched.operateur && Boolean(formik.errors.operateur)
              }
              helperText={formik.touched.operateur && formik.errors.operateur}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Adresse</Typography>
            <TextField
              fullWidth
              name="adress"
              size="small"
              onChange={formik.handleChange}
              error={formik.touched.adress && Boolean(formik.errors.adress)}
              helperText={formik.touched.adress && formik.errors.adress}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Contact Client</Typography>
            <TextField
              fullWidth
              name="contact_client"
              size="small"
              onChange={formik.handleChange}
              error={
                formik.touched.contact_client &&
                Boolean(formik.errors.contact_client)
              }
              helperText={
                formik.touched.contact_client && formik.errors.contact_client
              }
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Chambre</Typography>
            <TextField
              fullWidth
              name="chambre"
              size="small"
              onChange={formik.handleChange}
              error={formik.touched.chambre && Boolean(formik.errors.chambre)}
              helperText={formik.touched.chambre && formik.errors.chambre}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">BPE</Typography>
            <TextField
              fullWidth
              name="bpe"
              size="small"
              onChange={formik.handleChange}
              error={formik.touched.bpe && Boolean(formik.errors.bpe)}
              helperText={formik.touched.bpe && formik.errors.bpe}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Site Raccord</Typography>
            <TextField
              fullWidth
              name="site_raccorde"
              size="small"
              onChange={formik.handleChange}
              error={formik.touched.bpe && Boolean(formik.errors.bpe)}
              helperText={formik.touched.bpe && formik.errors.bpe}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">4Fo  
            <Switch
              id="4FO"
              checked={formik.values.four_fo}
              onChange={(event, checked)  => {
                formik.setFieldValue("four_fo", checked);
              }}
      
    > </Switch>
    </Typography>
           
           
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">32Fo <Switch
              id="32FO"
              checked={formik.values.thirty_fo}
              onChange={(event, checked)  => {
                formik.setFieldValue("thirty_fo", checked);
              }}></Switch></Typography>
            
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Devis Av <Switch
              id="Devis"
              checked={formik.values.devis_av}
              onChange={(event, checked)  => {
                formik.setFieldValue("devis_av", checked);
              }}></Switch></Typography>
           
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
          <DateTimePicker 
                        
                        onChange={(newValue) =>
                          formik.setFieldValue('start_date', newValue)
                        }
                        value={formik.values.start_date}
                        sx={{ width: '150' }}
                        label="Start date"
                      />
                     
          </Grid>

          <Grid item xs={6}>
          <DateTimePicker 
                        
                        onChange={(newValue) => {
                          if(newValue?.isAfter(formik.values.start_date)) {
                            formik.setFieldValue('end_date', newValue)
                          }
                        }
                          
                        }
                        value={formik.values.end_date}
                        sx={{ width: '150' }}
                        label="End date"
                      />
                     
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">Plan</Typography>
            <input type="file" onChange={handleFileChange} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">Add Info</Typography>
            <TextField
              fullWidth
              multiline
              rows={5}
              name="add_info"
              size="small"
              onChange={formik.handleChange}
              error={formik.touched.add_info && Boolean(formik.errors.add_info)}
              helperText={formik.touched.add_info && formik.errors.add_info}
            />
          </Grid>
        </Grid>
      </Box>
      <DialogActions>
        <Button
          onClick={() => {
            console.log(formik.errors);
            formik.handleSubmit();
          }}
        >
          Confirmer
        </Button>
      </DialogActions>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%' }}
        >
          Intervention crée avec succés.
        </Alert>
      </Snackbar>
    </Dialog>
  );
}

export default TaskDialog;
