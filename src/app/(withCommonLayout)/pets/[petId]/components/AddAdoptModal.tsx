import PetFrom from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import PetSelectField from "@/components/Forms/PetSelectField";
import PetModal from "@/components/Shared/PetModal/PetModal";
import { useCreateAdoptionRequestMutation } from "@/redux/api/adoptionApi";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const opinionOptions = ["YES", "NO"];
const AnimalSleepOptions = [
  "Outdoor",
  "Indoor",
  "Room",
  "Garage",
  "Crate",
];

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  petId: string;
  data: any;
};

const AddAdoptModal = ({ open, setOpen, petId, data }: TProps) => {
  const [createAdoptionRequest, { isLoading }] =
    useCreateAdoptionRequestMutation();
    
  const handleFormSubmit = async (values: FieldValues) => {
    try {
      const { name, email, address, contactNumber, ...others } = values;
      const data = {
        petId,
        ...others,
      };

      const res = await createAdoptionRequest(data);
      // console.log(res);
      if (res.data.id) {
        toast.success("Adoption request submitted successfully!");
        setOpen(false);
      }

    } catch (error: any) {
      toast.error(error.message);
      console.error(error.message);
    }
  };

  const defaultValues = {
    name: data?.name,
    email: data?.email,
    address: data?.address,
    contactNumber: data?.contactNumber,
  };

  return (
    <PetModal
      open={open}
      setOpen={setOpen}
      maxWidth="xl"
      title="Apply to Adopt"
    >
      <Container sx={{ textAlign: "center" }}>
        <Box>
          <Typography variant="body2" color="secondary">
            Please note you will not be able to submit your application until
            all fields marked as REQUIRED have been entered.
          </Typography>
        </Box>
        <PetFrom onSubmit={handleFormSubmit} defaultValues={defaultValues}>
          <Grid container spacing={2} my={1}>
            <Grid item sm={12} md={6}>
              <PetInput name="name" label="Name" type="text" fullWidth={true} />
            </Grid>
            <Grid item sm={12} md={6}>
              <PetInput
                name="email"
                label="Email"
                type="email"
                fullWidth={true}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <PetInput
                name="address"
                label="Address"
                type="text"
                fullWidth={true}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <PetInput
                name="contactNumber"
                label="Contract No"
                type="tel"
                fullWidth={true}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <PetSelectField
                name="petsNeutered"
                label="Are other pets neutered?"
                items={opinionOptions}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <PetSelectField
                name="secureOutdoorArea"
                label="Do you have a secure outdoor area?"
                items={opinionOptions}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <PetSelectField
                name="animalSleep"
                label="Where will the animal sleep at night?"
                items={AnimalSleepOptions}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <PetSelectField
                name="animalAlonePeriodsTime"
                label="Will the animal be left alone for long periods of time?"
                items={opinionOptions}
              />
            </Grid>
            <Grid item xs={12}>
              <PetInput
                name="petsHousehold"
                label="Details of other pets in household"
                type="text"
                multiline
                rows={3}
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12}>
              <PetInput
                name="petOwnershipExperience"
                label="Do you have any pet ownership experience?"
                type="text"
                multiline
                rows={3}
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12}>
              <PetInput
                name="detailsSupport"
                label="Any other details to support your application?"
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
            Adoption Request
          </Button>
        </PetFrom>
      </Container>
    </PetModal>
  );
};

export default AddAdoptModal;
