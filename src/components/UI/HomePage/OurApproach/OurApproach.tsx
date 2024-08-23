import assets from "@/assets";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const guideInfo = [
  {
    icon: assets.logo.approach_icon1,
    title: "Begin Your Pet Search",
    description:
      "Browse from our vast network of shelters and rescues to find your perfect pet.",
  },
  {
    icon: assets.logo.approach_icon2,
    title: "Get Ready to Meet the Pet",
    description:
      "View shelter details directly on the pet profile page and get recommendations for questions to ask at your visit.",
  },
  {
    icon: assets.logo.approach_icon3,
    title: "Finalize Your Adoption",
    description:
      "Get ready to bring home your new pet. Use our adoption checklist for tips on caring for your new family member.",
  },
];

const OurApproachSection = () => {
  return (
    <Container
      sx={{
        my: { xs: 8, md: 16 }
      }}
    >
      <Box textAlign="center" mb={8}>
        <Typography variant="h4" component="h1" fontWeight={700}>
          Our Approach
        </Typography>
        <Typography component="p" fontSize={20} fontWeight={500} mb={2}>
          Unlock the Joy of Pet Parenthood
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 4, md: 8 }
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            height: { xs: "auto", md: "400px" },
            overflow: "hidden",
            position: "relative",
            mb: { xs: 4, md: 0 },
            "&:hover img": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Image
            src={assets.images.approach_banner}
            width={400}
            height={400}
            alt="Donate Banner"
            style={{
              transition: "transform 0.9s ease",
              width: "100%",
              height: "auto",
              borderRadius: "5px",
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            textAlign: { xs: "center", md: "left" }
          }}
        >
          <Typography component="h4" variant="h4" fontWeight={400} mb={4} >
            Start your journey to pet parenthood with our step-by-step guide:
          </Typography>

          <Box>
            {guideInfo?.map((info, index) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 3
                }}
                key={index}
              >
                <Box
                  sx={{
                    minWidth: 50,
                    mr: 2
                  }}
                >
                  <Image
                    src={info.icon}
                    width={40}
                    height={40}
                    alt="Info Icon"
                  />
                </Box>
                <Box>
                  <Typography component="p" fontSize={18} fontWeight={600}>
                    {info.title}
                  </Typography>
                  <Typography variant="body2" fontSize={16} fontWeight={400}>
                    {info.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default OurApproachSection;
