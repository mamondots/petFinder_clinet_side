import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const BlogCard = ({ blog }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: 2,
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "300px",
          "&:hover img": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Image
          src={blog.image}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          style={{
            borderRadius: "8px 8px 0 0",
            transition: "transform 0.9s ease",
          }}
        />
      </Box>
      <Box sx={{ px: 2, pb: 2 }}>
        <Typography
          component="h4"
          variant="subtitle1"
          fontSize={20}
          fontWeight={600}
        >
          {blog.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {blog.description.length > 100
            ? `${blog.description.slice(0, 100)}...`
            : blog.description}
        </Typography>
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
    </Box>
  );
};

export default BlogCard;
