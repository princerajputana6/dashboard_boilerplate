// material
import { Stack, Button, Divider, Typography } from '@mui/material';
// component
import Iconify from '../../components/Iconify';
import {
  fbSignInInitiate,
  googleSignInInitiate,
  twSignInInitiate
} from "../../redux/actions";
import { useDispatch} from "react-redux";
// ----------------------------------------------------------------------

export default function AuthSocial() {
  const dispatch = useDispatch();
  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate());
  };
  const handleFBSignIn = () => {
    dispatch(fbSignInInitiate());
  };
  const handleTwSignIn = () => {
    dispatch(twSignInInitiate());
  };
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button onClick={handleGoogleSignIn} fullWidth size="large" color="inherit" variant="outlined">
          <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
        </Button>

        <Button onClick={handleFBSignIn} fullWidth size="large" color="inherit" variant="outlined">
          <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
        </Button>

        <Button onClick={handleTwSignIn} fullWidth size="large" color="inherit" variant="outlined">
          <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22} />
        </Button>
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
      </Divider>
    </>
  );
}
