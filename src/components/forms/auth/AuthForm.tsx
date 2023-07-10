import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import AuthService from 'src/services/AuthService';
import AuthContext from 'src/state/interventions/AuthContext';
import IAuthData from 'src/types/auth.type';
import { FORM_VALIDATION, INITIAL_FORM_STATE } from './AuthForm.hooks';

export interface IAuthForm {
  sampleTextProp?: string;
}

const AuthForm: React.FC<IAuthForm> = () => {
  const { login } = React.useContext(AuthContext);
  const router = useRouter();
  const [error, setError] = React.useState({
    error: false,
    errorData: { error: '', statusCode: 0, message: '' },
  });
  const submitForm = async (values: { login: string; password: string }) => {
    const authData: IAuthData = {
      login: values.login,
      password: values.password,
    };
    console.log(process.env);

    let response: any;

    try {
      response = await AuthService.login(authData);
      login(
        response.data.data,
        response.data.data.access_token,
        response.data.data.access_token
      );
      router.push('/');
    } catch (err: any) {
      if (err?.response) {
        setError({
          error: true,
          errorData: {
            error: err.response.data?.error,
            statusCode: err.response.data?.statusCode,
            message: err.response.data?.message,
          },
        });
      }
    }
  };
  const formik = useFormik({
    initialValues: INITIAL_FORM_STATE,
    validationSchema: FORM_VALIDATION,
    onSubmit: submitForm,
  });
  return (
    <Container maxWidth="xs" sx={{ width: '100%', height: '100%' }}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Image src={'/tech-logo.png'} alt="logo" width={100} height={100} />
        </Box>
        <Box mt={3} mb={3} sx={{ textAlign: 'center' }}>
          <Typography fontFamily={'Segoe UI'} fontWeight={'bold'} variant="h6">
            Signin
          </Typography>
        </Box>
        <Box
          mb={3}
          sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
          <Box>
            <Typography variant="body2">Username</Typography>
          </Box>
          <TextField
            name="login"
            onChange={formik.handleChange}
            error={formik.touched.login && Boolean(formik.errors.login)}
            helperText={formik.touched.login && formik.errors.login}
            variant="outlined"
            fullWidth
            size="small"
            type={'text'}
            sx={{ mb: 1 }}
          />
          <Box>
            <Typography variant="body2">Password</Typography>
          </Box>
          <TextField
            name="password"
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            fullWidth
            variant="outlined"
            size="small"
            type={'password'}
          />
        </Box>
        <Box width={'100%'}>
          <Button
            fullWidth
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            Signin
          </Button>
        </Box>
        {error.error ? (
          <Box>
            <Typography>{error.errorData.message}</Typography>
          </Box>
        ) : null}
      </Box>
    </Container>
  );
};

export default AuthForm;
