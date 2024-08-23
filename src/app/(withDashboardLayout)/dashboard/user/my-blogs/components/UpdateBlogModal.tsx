import PetFrom from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import PetSelectField from "@/components/Forms/PetSelectField";
import PetModal from "@/components/Shared/PetModal/PetModal";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { blogCategoryOptions } from "@/components/Shared/SelectOptions/SelectOptions";
import { useUpdateBlogMutation } from "@/redux/api/blogApi";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
};

const UpdateBlogModal = ({ open, setOpen, data }: TProps) => {
  const [updateBlog] = useUpdateBlogMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    try {
      const blogData = {
        id: data.id,
        ...values,
        like: Number(values.like),
      };

      const res = await updateBlog(blogData);
      //   console.log(res);

      if (res.data.id) {
        toast.success("Blog updated successfully!");
        setOpen(false);
      }
    } catch (error: any) {
      toast.error(error.message);
      console.error(error.message);
    }
  };

  const defaultValues = {
    title: data?.title,
    description: data?.description,
    image: data?.image,
    reference: data?.reference,
    tags: data?.tags,
    category: data?.category,
    like: data?.like,
  };
  //   console.log(data);

  return (
    <PetModal maxWidth="md" open={open} setOpen={setOpen} title="Update A Blog">
      <PetFrom onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <PetInput
              name="title"
              label="Blog Name"
              type="text"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12}>
            <PetInput
              name="image"
              label="Blog Image Url"
              type="text"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12}>
            <PetInput
              name="reference"
              label="Blog Reference"
              type="text"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12}>
            <PetInput
              name="tags"
              label="Blog Tags"
              type="text"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PetSelectField
              name="category"
              label="Blog Category"
              items={blogCategoryOptions}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PetInput
              name="like"
              label="Blogs Like"
              type="text"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12}>
            <PetInput
              name="description"
              label="Blog Description"
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
          Update A Blog
        </Button>
      </PetFrom>
    </PetModal>
  );
};

export default UpdateBlogModal;
