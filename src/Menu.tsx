import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useLocation, useNavigate } from 'react-router-dom';
import './Menu.css';

export default function BasicMenu(props: any) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const url = useLocation();

  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    if (event.target.innerText !== 'ILLUSTRATION') {
      return;
    }
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e: any) => {
    const selectedOption = e.target.innerText;

    if (selectedOption === 'Portraits') {
      navigate('/portraits');
    }

    if (selectedOption === 'Backgrounds') {
      navigate('/backgrounds');
    }
    setAnchorEl(null);
  };

  let underline = false;

  if ((url.pathname === '/portraits' || url.pathname === '/backgrounds') && props.page === 'ILLUSTRATION') {
    underline = true;
  } else {
    underline = false;
  }

  return (
    <div>
      <Button sx={{ color: '#FAFAFA', textDecoration: underline ? 'underline' : '', textUnderlineOffset: '0.5rem' }} id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
        {props.page}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Portraits</MenuItem>
        <MenuItem onClick={handleClose}>Backgrounds</MenuItem>
      </Menu>
    </div>
  );
}
