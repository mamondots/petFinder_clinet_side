import assets from "@/assets";
import { Box, Container, Typography, Button } from "@mui/material";
import Image from "next/image";
import DonateButton from "./components/DonateButton";

const DonateSection = () => {
  return (
    <Container
      sx={{
        my: 12,
        py: { xs: 4, md: 8 },
        borderRadius: "12px",
        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h4"
          component="h1"
          fontWeight={700}
        >
          Our Impact
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400} >
          Help Us Save Lives: Support Our Mission
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            textAlign: { xs: "center", md: "left" }
          }}
        >
          <Typography component="p" fontSize={26} fontWeight={600} mb={1}>
          Join Us in Making a Difference: Support Our Life-Saving Mission
        </Typography>
          <Typography variant="body1" fontSize={20} fontWeight={400}>
            Since early 2022, UWARF has successfully completed four critical
            missions in Ukraine, providing vital care to over 5,500 animals. As
            we look ahead to 2023 and beyond, we are committed to scaling our
            efforts with the ambitious goal of sterilizing 400,000 dogs and cats
            by 2025. At just $44 per animal, your generous support is essential
            to help us reach this milestone and continue saving lives. Together,
            we can make a profound difference.
          </Typography>

          <DonateButton />
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            height: "400px",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
            position: "relative",
            transition: "transform 0.9s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Image
            src={assets.images.donate_banner}
            layout="fill"
            objectFit="cover"
            alt="Donate Banner"
            style={{
              borderRadius: "12px",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default DonateSection;
