import PetModal from "@/components/Shared/PetModal/PetModal";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
};

const demoCredentials = [
    // {
    //   role: 'Super Admin',
    //   email: 'john@example.com',
    //   password: 'user123'
    // },
    {
      role: 'Admin',
      email: 'alice@example.com',
      password: 'user123'
    },
    {
      role: 'User',
      email: 'emily@example.com',
      password: 'user123'
    }
  ];

const ShowCredentialsModal = ({ open, setOpen}: TProps) => {
  return (
    <PetModal
      open={open}
      setOpen={setOpen}
      maxWidth="sm"
      title="Show Demo Accounts"
    >
      <Container sx={{ textAlign: "center", padding: 3 }}>
        <Typography variant="body2" color="warning.main" fontSize="12px" mb={3} mt={-3}>
          <strong>Warning:</strong> These are demo credentials intended for demonstration purposes only!. <br /> Please do not use them for actual authentication.
        </Typography>
        
        <Grid container spacing={2} justifyContent="center">
          {demoCredentials.map((credential, index) => (
            <Grid item xs={12} key={index}>
              <Paper
                elevation={3}
                sx={{
                  padding: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: 2,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                  }
                }}
              >
                <Typography variant="h6" color="secondary.main" gutterBottom>
                  {credential.role}
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  <strong>Email:</strong> {credential.email}
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  <strong>Password:</strong> {credential.password}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </PetModal>
  );
};

export default ShowCredentialsModal;