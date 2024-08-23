"use client";

import PetFrom from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import PetSelectField from "@/components/Forms/PetSelectField";
import { colorOptions, genderOptions, healthOptions, sizeOptions } from "@/components/Shared/SelectOptions/SelectOptions";
import { useCreatePetMutation } from "@/redux/api/petApi";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

// const petValidationSchema = z.object({
//   name: z.string().min(1, "Please enter the pet's name!"),
//   image: z.string().url("Please enter a valid image URL!"),
//   species: z.string().min(1, "Please enter the species!"),
//   breed: z.string().min(1, "Please enter the breed!"),
//   color: z.string().min(3, "Please select a valid color!"),
//   age: z.string(),
//   gender: z.string().min(1, "Please select a valid gender!"),
//   size: z.string().min(3, "Please select a valid size!"),
//   location: z.string().min(1, "Please enter the location!"),
//   temperament: z.string().min(1, "Please enter the temperament!"),
//   healthStatus: z.string().min(1, "Please select a valid health status!"),
//   description: z.string().min(1, "Please enter a description!"),
//   medicalHistory: z.string().min(1, "Please enter the medical history!"),
//   adoptionRequirements: z
//     .string()
//     .min(1, "Please enter the adoption requirements!"),
// });

const AddPetPage = () => {
  const { data } = useGetMyProfileQuery({});
  const [createPet, { isLoading }] = useCreatePetMutation();

  const handleSubmit = async (values: FieldValues) => {
    // console.log(values);
    try {
      const petData = {
        userId: data.id,
        ...values,
        age: Number(values.age),
      };

      const res = await createPet(petData);
      // console.log(res);
      if (res.data.id) {
        toast.success("Pet created successfully!");
      }
    } catch (error: any) {
      toast.error(error.message);
      console.error(error.message);
    }
  };
  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography
        variant="h5"
        color="primary"
        textTransform="uppercase"
        mt={2}
        mb={1}
      >
        Add Pet
      </Typography>
      <Box>
        <Typography variant="body2" color="secondary">
          Please note you will not be able to submit your application until all
          fields marked as REQUIRED have been entered.
        </Typography>
      </Box>
      <PetFrom
        onSubmit={handleSubmit}
        // resolver={zodResolver(petValidationSchema)}
      >
        <Grid container spacing={2} my={1}>
          <Grid item xs={12} md={6}>
            <PetInput
              name="name"
              label="Pet Name"
              type="text"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PetInput
              name="image"
              label="Image Url"
              type="text"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PetInput
              name="species"
              label="Species"
              type="text"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PetInput name="breed" label="Breed" type="text" fullWidth={true} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PetSelectField
              name="color"
              label="color"
              items={colorOptions}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PetInput name="age" label="Age" type="text" fullWidth={true} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PetSelectField
              name="gender"
              label="Gender"
              items={genderOptions}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PetSelectField
              name="size"
              label="size"
              items={sizeOptions}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PetInput
              name="location"
              label="Location"
              type="text"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PetInput
              name="temperament"
              label="Temperament"
              type="text"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PetSelectField
              name="healthStatus"
              label="Health Status"
              items={healthOptions}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12}>
            <PetInput
              name="description"
              label="Description"
              type="text"
              multiline
              rows={3}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12}>
            <PetInput
              name="medicalHistory"
              label="Medical History"
              type="text"
              multiline
              rows={3}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12}>
            <PetInput
              name="adoptionRequirements"
              label="Adoption Requirements"
              type="text"
              multiline
              rows={3}
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
          Add Pet
        </Button>
      </PetFrom>
    </Container>
  );
};

export default AddPetPage;
