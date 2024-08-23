import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import BannerButton from "./components/BannerButton";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "500px", md: "600px" },
        overflow: "hidden",
      }}
    >
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
          src={assets.images.banner}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          style={{ filter: "brightness(70%)" }}
        />
      </Box>

      {/* Gradient Overlay */}
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

      {/* Text and Button */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "40%", md: "50%" },
          left: { xs: 20, md: "10%" },
          transform: "translateY(-50%)",
          zIndex: 3,
          color: "white",
          textAlign: "left",
          maxWidth: { xs: "80%", md: "50%" }
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          fontWeight={700}
          sx={{ fontSize: { xs: "2rem", md: "3.5rem" }, lineHeight: 1.2 }}
        >
          Adopt a Pet, Save a Life
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            mt: 2,
            mb: 4,
            fontSize: { xs: "1rem", md: "1.25rem" },
            fontWeight: 400,
            lineHeight: 1.6,
          }}
        >
          Discover a new best friend today. Explore our vast network of shelters
          and rescues to find your perfect pet companion.
        </Typography>

        <BannerButton />
      </Box>
    </Box>
  );
};

export default HeroSection;
