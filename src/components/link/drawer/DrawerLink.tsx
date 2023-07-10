import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { ReactNode } from 'react';

export interface IDrawerLink {
  icon?: ReactNode;
  text: string;
  onClick: () => void;
}

const DrawerLink: React.FC<IDrawerLink> = ({ icon, text, onClick }) => {
  return (
    <ListItem key={text} disablePadding onClick={onClick}>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default DrawerLink;
