import PetFrom from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import PetSelectField from "@/components/Forms/PetSelectField";
import PetModal from "@/components/Shared/PetModal/PetModal";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { useUpdatePetMutation } from "@/redux/api/petApi";
import { toast } from "sonner";
import { colorOptions, genderOptions, healthOptions, sizeOptions } from "@/components/Shared/SelectOptions/SelectOptions";


type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
};

const UpdatePetModal = ({ open, setOpen, data }: TProps) => {
  const [updatePet] = useUpdatePetMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    try {
      const petData = {
        id: data.id,
        ...values,
        age: Number(values.age),
      };
      const res = await updatePet(petData);
      // console.log(res);
      if (res.data.id) {
        toast.success("Pet updated successfully!");
        setOpen(false);
      }
      
    } catch (error: any) {
      toast.error(error.message);
      console.error(error.message);
    }
    
  };

  const defaultValues = {
    name: data?.name,
    status: data?.status,
    image: data?.image,
    species: data?.species,
    breed: data?.breed,
    color: data?.color,
    age: data?.age,
    gender: data?.gender,
    size: data?.size,
    location: data?.location,
    temperament: data?.temperament,
    healthStatus: data?.healthStatus,
    description: data?.description,
    medicalHistory: data?.medicalHistory,
    adoptionRequirements: data?.adoptionRequirements,
  };
  // console.log(data);

  return (
    <PetModal maxWidth="lg" open={open} setOpen={setOpen} title="Update A Pet">
      <PetFrom onSubmit={handleFormSubmit} defaultValues={defaultValues} >
        <Grid container spacing={2}>
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
              label="Color"
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
          Update A Pet
        </Button>
      </PetFrom>
    </PetModal>
  );
};

export default UpdatePetModal;
