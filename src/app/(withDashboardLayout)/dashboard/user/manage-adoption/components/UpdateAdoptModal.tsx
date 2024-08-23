import PetFrom from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import PetSelectField from "@/components/Forms/PetSelectField";
import PetModal from "@/components/Shared/PetModal/PetModal";
import { useUpdateAdoptionRequestMutation } from "@/redux/api/adoptionApi";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
};

const opinionOptions = ["YES", "NO"];
const AnimalSleepOptions = ["Outdoor", "Indoor", "Room", "Garage", "Crate"];

const UpdateAdoptRequestModal = ({ open, setOpen, data }: TProps) => {
  const [updateAdoptionRequest, { isLoading }] =
    useUpdateAdoptionRequestMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    const { name, email, address, contactNumber, ...others } = values;
    const updatedData = {
      id: data.id,
      data: { ...others },
    };

    try {
      const res = await updateAdoptionRequest(updatedData);
      if (res.data.id) {
        toast.success("Adoption request updated successfully!");
        setOpen(false);
      }
    } catch (error: any) {
      toast.error(error.message);
      console.error(error.message);
    }
  };

  const defaultValues = {
    name: data?.user?.name,
    email: data?.user?.email,
    address: data?.user?.address,
    contactNumber: data?.user?.contactNumber,
    status: data?.status,
    petsNeutered: data?.petsNeutered,
    secureOutdoorArea: data?.secureOutdoorArea,
    animalSleep: data?.animalSleep,
    animalAlonePeriodsTime: data?.animalAlonePeriodsTime,
    petsHousehold: data?.petsHousehold,
    petOwnershipExperience: data?.petOwnershipExperience,
    detailsSupport: data?.detailsSupport,
  };

  //   console.log(data);

  return (
    <PetModal
      maxWidth="lg"
      open={open}
      setOpen={setOpen}
      title="Update Pet Adopt status"
    >
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
          Update Adoption Request
        </Button>
      </PetFrom>
    </PetModal>
  );
};

export default UpdateAdoptRequestModal;
