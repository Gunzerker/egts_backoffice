import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export interface IPageHeader {
  text: string;
  icon: React.ReactNode;
}

const PageHeader: React.FC<IPageHeader> = ({ text, icon }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      }}
      p={2}
      mb={1}
      borderRadius={2}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Typography variant="h6">{text}</Typography>
      </Box>
      <Divider />
    </Box>
  );
};

export default PageHeader;
