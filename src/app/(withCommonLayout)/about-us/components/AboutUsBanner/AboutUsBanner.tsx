import assets from "@/assets";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const AboutUsBanner = () => {
  return (
    <Box sx={{ position: "relative", height: "350px", mt: 2 }}>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <Image
          src={assets.images.about_us}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          style={{ filter: "brightness(70%)" }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 2,
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "45%",
          left: 16,
          transform: "translateY(-50%)",
          zIndex: 3,
          padding: "20px",
          borderRadius: "8px",
          color: "white",
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          fontWeight={900}
          color="white"
          mb={1}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          color="white"
          fontWeight={400}
          mb={1}
        >
          We are dedicated to making a difference in the lives of pets and the
          people who love them.
        </Typography>
        <Typography variant="body1" color="white">
          Our mission is to create a world where every pet is safe, healthy, and
          loved. We believe in the power of adoption, healthcare, and community
          initiatives to bring about positive change. Join us as we continue our
          journey to make the world a better place for our furry friends.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUsBanner;
