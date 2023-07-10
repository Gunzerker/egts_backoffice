import AuthForm from '@/components/forms/auth/AuthForm';
import { Box } from '@mui/material';

export default function Signin() {
  return (
    <Box sx={{ height: '98vh' }}>
      <AuthForm />
    </Box>
  );
}
