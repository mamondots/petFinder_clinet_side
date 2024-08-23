import { Box, Container, Grid, Typography } from "@mui/material";
import BlogBannerCard from "./components/BlogBannerCard/BlogBannerCard";
import BlogCard from "./components/BlogCard/BlogCard";

const categories = [
  "Adopting a Pet",
  "Health & Safety",
  "Symptoms",
  "Pet Behavior",
  "Pet Insurance",
  "Pet Care",
  "Pet Health",
  "others"
];

const page = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/blog`);
  const { data: blogs } = await res.json();
  //   console.log(blogs);

  return (
    <Container sx={{ my: 8 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" component="h1" fontWeight={700}>
          Pet Article
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: 2,
            mt: 2,
          }}
        >
          <Typography variant="body2" fontSize={14} fontWeight={800}>
            Popular Tags:
          </Typography>
          {categories.map((category, index) => (
            <Box sx={{ cursor: "pointer" }} key={index}>
              <Typography
                variant="body2"
                fontSize={14}
                fontWeight={400}
                sx={{
                  position: "relative",
                  "&:hover": {
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "100%",
                      height: "2px",
                      backgroundColor: "currentColor",
                      bottom: 0,
                      left: 0,
                    },
                  },
                }}
              >
                {category}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box>
        <BlogBannerCard blog={blogs[0]} />
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {blogs.slice(1).map((blog: any) => (
            <Grid item xs={12} sm={12} md={4} key={blog.id}>
              <BlogCard blog={blog} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default page;
