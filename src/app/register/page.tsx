"use client";

import PetFrom from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import PetInputWithToggle from "@/components/Forms/PetInputWithToggle";
import { userLogin } from "@/services/actions/loginUsers";
import { registerUsers } from "@/services/actions/registeUsers";
import { storeUserInfo } from "@/services/auth.services";
import { IRegisterUser } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const userValidationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
  confirmPass: z.string().min(6, "Must be at least 6 characters"),
  contactNumber: z
    .string()
    .regex(/^\d{11}$/, "Please provide a valid phone number!"),
  address: z.string().min(1, "Please enter your address!"),
});

const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPass: "",
  contactNumber: "",
  address: "",
};

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    const { password, confirmPass, name, email, contactNumber, address } =
      values;

    const userData: IRegisterUser = {
      name,
      email,
      password,
      contactNumber,
      address,
    };

    if (password !== confirmPass) {
      toast.error("Password and Confirm Passwords do not match!");
      return;
    }

    if (password === confirmPass) {
      try {
        const res = await registerUsers(userData);
        // console.log(res);
        if (res?.data?.id) {
          toast.success(res?.message);

          const result = await userLogin({
            email,
            password,
          });
          if (result?.data?.token) {
            storeUserInfo({ accessToken: result?.data?.token });
            router.push("/dashboard");
          }
        }
      } catch (error: any) {
        toast.error(error.message);
        console.error(error.message);
      }
    }
  };

  return (
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
            <Typography component="p" sx={{
                fontSize: "14px",
                color: "gray",
              }}>Welcome To Petfinder</Typography>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Sign up to your account
              </Typography>
            </Box>
          </Stack>
          {/* here start form */}
          <PetFrom
            onSubmit={handleRegister}
            resolver={zodResolver(userValidationSchema)}
            defaultValues={defaultValues}
          >
            <Box>
              <Grid container spacing={2} my={2}>
                <Grid item sm={12}>
                  <PetInput
                    name="name"
                    label="Username"
                    type="text"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item sm={6}>
                  <PetInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item sm={6}>
                  <PetInput
                    name="contactNumber"
                    label="Contract No"
                    type="tel"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item sm={6}>
                <PetInputWithToggle
                    name="password"
                    label="Password"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item sm={6}>
                  <PetInputWithToggle
                    name="confirmPass"
                    label="Confirm Password"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item sm={12}>
                  <PetInput
                    name="address"
                    label="Address"
                    type="text"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth={true}
                sx={{
                  margin: "10px 0",
                }}
                type="submit"
              >
                Sign up
              </Button>
              <Typography variant="body2" component="p" fontWeight={300}>
                Do you already have an account?{" "}
                <Link href="/login">
                <Box
                    fontWeight="bold"
                    component="span"
                    sx={{ textDecoration: "underline" }}
                  >
                    Login
                  </Box>
                </Link>
              </Typography>
            </Box>
          </PetFrom>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
