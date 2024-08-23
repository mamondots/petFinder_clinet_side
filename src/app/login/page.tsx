"use client";

import PetFrom from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import { userLogin } from "@/services/actions/loginUsers";
import { storeUserInfo } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import ShowCredentialButton from "./components/ShowCredentialsButton";
import LoginIcon from "@mui/icons-material/Login";
import PetInputWithToggle from "@/components/Forms/PetInputWithToggle";
import { useState } from "react";
import ForgetPasswordModal from "./components/ForgetPasswordModal";

const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

const LoginPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = async (values: FieldValues) => {
    // console.log("Form Submitted:", values);
    try {
      const res = await userLogin(values);
      console.log(res);
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        // router.push("/dashboard");
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      toast.error(err.message);
      console.error(err.message);
    }
  };
  return (
    <>
      <ForgetPasswordModal open={isModalOpen} setOpen={setIsModalOpen} />
      <Container>
        <Stack
          sx={{
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: 600,
              width: "100%",
              boxShadow: 1,
              borderRadius: 1,
              p: 4,
              textAlign: "center",
            }}
          >
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                component="p"
                sx={{
                  fontSize: "14px",
                  color: "gray",
                }}
              >
                Welcome To Petfinder
              </Typography>
              <Box>
                <Typography variant="h6" fontWeight={600}>
                  Login to your account
                </Typography>
              </Box>
            </Stack>
            <>
              <PetFrom
                onSubmit={handleLogin}
                resolver={zodResolver(validationSchema)}
                defaultValues={{
                  email: "alice@example.com",
                  password: "user123",
                }}
              >
                <Grid container spacing={2} my={1}>
                  <Grid item sm={12}>
                    <PetInput
                      name="email"
                      label="Email"
                      type="email"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <Typography
                      onClick={() => setIsModalOpen(true)}
                      sx={{
                        fontSize: "12px",
                        fontWeight: "bold",
                        textAlign: "end",
                        cursor: "pointer",
                        textDecoration: "underline",
                        marginTop: "-10px",
                      }}
                      variant="body2"
                      // startIcon={<StorageIcon />}
                    >
                      Forgot Password?
                    </Typography>
                    <PetInputWithToggle
                      name="password"
                      label="Password"
                      fullWidth={true}
                    />
                  </Grid>
                </Grid>

                <Button
                  fullWidth={true}
                  sx={{
                    margin: "15px 0",
                  }}
                  type="submit"
                  startIcon={<LoginIcon />}
                >
                  Login
                </Button>
                <Divider>OR</Divider>

                <ShowCredentialButton />
                <Typography variant="body2" component="p" fontWeight={300}>
                  Need an account?{" "}
                  <Link href="/register">
                    <Box
                      fontWeight="bold"
                      component="span"
                      sx={{ textDecoration: "underline" }}
                    >
                      SignUp
                    </Box>
                  </Link>
                </Typography>
              </PetFrom>
            </>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default LoginPage;
