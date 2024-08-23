import PetFrom from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import PetSelectField from "@/components/Forms/PetSelectField";
import PetModal from "@/components/Shared/PetModal/PetModal";
import { useUpdateMyProfileMutation } from "@/redux/api/userApi";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const genderOptions = ["Male", "Female", "Unknown"];

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
};

const ProfileUpdateModal = ({ open, setOpen, data }: TProps) => {
  const [updateMyProfile, { isLoading }] =
  useUpdateMyProfileMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    // console.log(values);
    try {
       const res = await updateMyProfile(values);
       if (res?.data?.id) {
        toast.success("Profile updated successfully!");
       }
       setOpen(false);
       
    } catch (error: any) {
      toast.error(error.message);
      console.error(error.message);
    }
  };

  const defaultValues = {
    email: data?.email,
    name: data?.name,
    contactNumber: data?.contactNumber,
    address: data?.address,
    gender: data?.gender,
  };

  return (
    <PetModal open={open} setOpen={setOpen} title="Edit Profile">
      <PetFrom onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <PetInput
              name="name"
              label="Name"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PetInput
              name="email"
              type="email"
              label="Email"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PetInput
              name="contactNumber"
              label="Contract Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PetSelectField
              items={genderOptions}
              name="gender"
              label="Gender"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <PetInput
              name="address"
              label="Address"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>

        <Button type="submit">Update</Button>
      </PetFrom>
    </PetModal>
  );
};

export default ProfileUpdateModal;
