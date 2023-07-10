import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import Person3RoundedIcon from '@mui/icons-material/Person3Rounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
export interface IToolbarLayout {
  children?: React.ReactNode;
}

const ToolbarLayout: React.FC<IToolbarLayout> = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100%',
        textAlign: 'right',
      }}
    >
      {/* <SearchTextfield /> */}
      <IconButton>
        <LanguageRoundedIcon sx={{ color: 'white' }} />
      </IconButton>
      <IconButton>
        <LightbulbRoundedIcon sx={{ color: 'white' }} />
      </IconButton>
      <IconButton>
        <Person3RoundedIcon sx={{ color: 'white' }} />
      </IconButton>
    </Box>
  );
};
export default ToolbarLayout;
