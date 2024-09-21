// material-ui
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
// import IconButton from '@mui/material/IconButton';
// import Link from '@mui/material/Link';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Box from '@mui/material/Box';

// project import
// import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';
import { useAuth0 } from '@auth0/auth0-react';

import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from '@mui/material';

// project import
// import { GithubOutlined } from '@ant-design/icons';

// ==============================|| HEADER - CONTENT ||============================== //

export default function HeaderContent() {
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

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
      {/* {!downLG && <Search />} */}
      {downLG && <Box sx={{ width: '100%', ml: 1 }} />}
      {/* <IconButton
        component={Link}
        href="https://github.com/codedthemes/mantis-free-react-admin-template"
        target="_blank"
        disableRipple
        color="secondary"
        title="Download Free Version"
        sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
      >
        <GithubOutlined />
      </IconButton> */}

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
        {/* <InputLabel id="demo-select-small-label" style={{ paddingTop: '6px' }}>
          Lang
        </InputLabel> */}
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
        style={{ width: '38px', height: '38px',border: '1px solid #D3D3D3', borderRadius: '16px', padding:'4px' , marginRight:'8px'}}
      />
      {/* <SearchOutlinedIcon /> */}
      {/* {!downLG && <Profile />}
      {downLG && <MobileSection />} */}
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
