import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

import Notification from './Notification';
import { useAuth0 } from '@auth0/auth0-react';

import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

export default function HeaderContent() {
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated } = useAuth0();

  const [language, setLanguage] = React.useState('English');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <>
      {!downLG && (
        <h2 style={{ width: '100%', ml: { xs: 0, md: 1 }, textAlign: 'center', margin: '12px', display: 'flex', alignItems: 'center' }}>
          Dashboard
        </h2>
      )}
      {downLG && <Box sx={{ width: '100%', ml: 1 }} />}

      <AvatarGroup
        max={4}
        spacing="medium"
        sx={{
          '& .MuiAvatarGroup-avatar': {
            width: 34,
            height: 34
          }
        }}
      >
        <Avatar alt="Remy Sharp" src="https://github.com/shadcn.png" sx={{ width: 34, height: 34 }} />
        <Avatar
          alt="Travis Howard"
          src="https://play-lh.googleusercontent.com/LeX880ebGwSM8Ai_zukSE83vLsyUEUePcPVsMJr2p8H3TUYwNg-2J_dVMdaVhfv1cHg=w240-h480-rw"
          sx={{ width: 34, height: 34 }}
        />
        <Avatar
          alt="Cindy Baker"
          src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
          sx={{ width: 34, height: 34 }}
        />
        <Avatar alt="Agnes Walker" src="https://github.com/shadcn.png" sx={{ width: 34, height: 34 }} />
        <Avatar alt="Trevor Henderson" src="https://github.com/shadcn.png" sx={{ width: 34, height: 34 }} />
      </AvatarGroup>

      <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
        <Select
          autoWidth
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={language}
          onChange={handleChange}
          sx={{ fontSize: '12px' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="English">ENG</MenuItem>
          <MenuItem value="French">FRE</MenuItem>
          <MenuItem value="Hindi">HIN</MenuItem>
        </Select>
      </FormControl>
      <Notification />
      <img
        src="https://png.pngtree.com/element_our/png/20181227/settings-glyph-black-icon-png_292947.jpg"
        style={{ width: '38px', height: '38px', border: '1px solid #D3D3D3', borderRadius: '16px', padding: '4px', marginRight: '8px' }}
      />
      {isAuthenticated ? (
        <Button onClick={() => logout({ returnTo: window.location.origin })} variant="contained">
          Logout
        </Button>
      ) : (
        <Button onClick={() => loginWithRedirect()} variant="contained">
          Login
        </Button>
      )}
    </>
  );
}
