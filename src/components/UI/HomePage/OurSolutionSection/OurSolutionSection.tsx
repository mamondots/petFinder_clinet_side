import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const OurSolutionSection = async() => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/blog?limit=3`
    );
    const { data: blogs } = await res.json();
    
  return (
    <Container sx={{ my: 16 }}>
      <Box textAlign="center" mb={8}>
        <Typography variant="h4" component="h1" fontWeight={700} color="primary.main">
          Our Solution
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400} sx={{ mt: 2, color: "#555" }}>
          Unleashing the power of Love, together.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {blogs.map((blog: any) => (
          <Grid item key={blog._id} xs={12} md={4}>
            <Box
              sx={{
                overflow: "hidden",
                position: "relative",
                width: "100%",
                borderRadius: "10px",
                '&:hover img': {
                  transform: "scale(1.1)",
                },
                '&:hover::before': {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                },
                cursor: "pointer",
              }}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                style={{
                  transition: "transform 0.9s ease",
                  width: "100%",
                  height: "auto",
                }}
              />
            </Box>

            <Box sx={{ mt: 3, px: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                <i className="fas fa-bookmark"></i> {blog.category}
              </Typography>
              <Typography gutterBottom variant="h5" component="div" fontWeight={600} sx={{ color: "#333" }}>
                {blog.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {blog.description.length > 100
                  ? `${blog.description.slice(0, 100)}...`
                  : blog.description}
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  textTransform: "none",
                  borderRadius: 20,
                  padding: "6px 12px"
                }}
              >
                Read More
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* View all Button */}
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Button
          component={Link}
          href="/blogs"
          sx={{
            textTransform: "none",
            borderRadius: 20,
            padding: "10px 20px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "#800ede",
            },
          }}
        >
          View all Blogs
        </Button>
      </Box>
    </Container>
  );
};

export default OurSolutionSection;
