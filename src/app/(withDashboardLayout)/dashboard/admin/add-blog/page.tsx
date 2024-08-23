"use client";

import PetFrom from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import PetSelectField from "@/components/Forms/PetSelectField";
import { blogCategoryOptions } from "@/components/Shared/SelectOptions/SelectOptions";
import { useCreateBlogMutation } from "@/redux/api/blogApi";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const AddBlogPage = () => {
  const { data } = useGetMyProfileQuery({});
  const [createBlog] = useCreateBlogMutation();
  const router = useRouter();

  const handleFormSubmit = async (values: FieldValues) => {
    try {
      const tagsArray = values.tags.split(",").map((tag: string) => tag.trim());

      const blogData = {
        userId: data.id,
        ...values,
        tags: tagsArray,
      };

      const res = await createBlog(blogData);
      // console.log(res);
      if (res.data.id) {
        toast.success("Blog created successfully!");
        router.push("/dashboard/admin/manage-blogs");
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
        Add Blog
      </Typography>
      <Box>
        <Typography sx={{ mb: 6 }} variant="body2" color="secondary">
          Please note you will not be able to submit your application until all
          fields marked as REQUIRED have been entered.
        </Typography>
      </Box>
      <PetFrom onSubmit={handleFormSubmit}>
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
          <Grid item xs={12}>
            <PetSelectField
              name="category"
              label="Blog Category"
              items={blogCategoryOptions}
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
          Add A Blog
        </Button>
      </PetFrom>
    </Container>
  );
};

export default AddBlogPage;
