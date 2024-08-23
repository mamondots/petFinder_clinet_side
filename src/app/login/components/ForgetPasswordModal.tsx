import PetFrom from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import PetModal from "@/components/Shared/PetModal/PetModal";
import { useForgotPasswordMutation } from "@/redux/api/authApi";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
};

const ForgetPasswordModal = ({ open, setOpen}: TProps) => {
  const [forgotPassword] = useForgotPasswordMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    try {
      const res = await forgotPassword(values);
      if (res) {
        toast.success("Password reset link sent to your email!");
        setOpen(false);
      }
    } catch (error: any) {
      toast.error(error.message);
      console.error(error.message);
    }
  };

  return (
    <PetModal
      open={open}
      setOpen={setOpen}
      maxWidth="sm"
      title="Forgot Your Password?"
    >
      <Container sx={{ textAlign: "center" }}>
        <Box>
        <Typography variant="body2"  color="warning.main" sx={{fontSize: "12px"}} mb={3}>
       Info: Please enter your registered email address below.Check your Email we will send you instructions on how to reset your password.
      </Typography>
        </Box>
        <PetFrom onSubmit={handleFormSubmit}>
          <Grid container spacing={2} my={1}>
            <PetInput
              name="email"
              label="Email Address"
              type="email"
              fullWidth={true}
            />
          </Grid>

          <Button
            fullWidth={true}
            sx={{
              margin: "10px 0",
            }}
            type="submit"
          >
            Send Reset Link
          </Button>
        </PetFrom>
      </Container>
    </PetModal>
  );
};

export default ForgetPasswordModal;
