import { Box, CircularProgress } from '@mui/material';

export default function BaseLoader() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '20%',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
