import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const BlogBannerCard = ({ blog }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        maxHeight: "400px",
        overflow: "hidden",
        borderRadius: 2,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f8f9fa",
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          "&:hover img": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Image
          src={blog.image}
          alt="Blog Image"
          width={600}
          height={300}
          style={{
            objectFit: "cover",
            borderRadius: 10,
            transition: "transform 0.9s ease",
          }}
        />
      </Box>

      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ display: "flex", alignItems: "center" }}
          >
            ✏️ {blog?.author?.name}
          </Typography>

          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ display: "flex", alignItems: "center" }}
          >
            📅{" "}
            {new Date(blog?.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Typography>
        </Box>

        <Typography variant="h5" fontWeight={700} gutterBottom>
          {blog?.title}
        </Typography>

        <Typography variant="body2" color="secondary" gutterBottom>
          {blog?.description}
        </Typography>

        <Typography variant="body2" color="textSecondary" gutterBottom>
          Category: {blog?.category || "General"}
        </Typography>

        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          Read Article
        </Button>
      </Box>
    </Box>
  );
};

export default BlogBannerCard;
