import { Box, Typography, Container, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type IAboutServices = {
  image: string;
  title: string;
  sub_title: string;
  description: string;
  stats: string;
  additional_info: string;
  learn_more_link: string;
};

const AboutServices = ({ data }: { data: IAboutServices[] }) => {
  return (
    <Container sx={{ my: 6 }}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" component="h2" fontWeight={700}>
          Results That Get Tails Wagging
        </Typography>
        <Typography variant="subtitle1" component="p" color="textSecondary">
          Our lifesaving impact is nationwide
        </Typography>
      </Box>

      {data.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: index % 2 === 0 ? "row" : "row-reverse",
            },
            gap: 8,
            backgroundColor: "#f0f4f8",
            padding: "15px",
            alignItems: "center",
            borderRadius: "10px",
            boxShadow: "0 3px 6px rgba(0, 0, 0, 0.08)",
            mb: 5,
          }}
        >
          <Box
            sx={{
              overflow: "hidden",
              position: "relative",
              width: { xs: "100%", md: "45%" },
              maxHeight: "450px",
              "&:hover img": {
                transform: "scale(1.05)",
              },
              cursor: "pointer",
            }}
          >
            <Image
              src={item.image}
              layout="responsive"
              width={400}
              height={300}
              alt={item.title}
              style={{
                transition: "transform 0.9s ease",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "55%" },
              textAlign: { xs: "center", md: "left" },
              maxHeight: "300px",
              overflow: "hidden",
            }}
          >
            <Typography variant="body2" component="p" gutterBottom>
              {item.sub_title}
            </Typography>
            <Typography
              variant="h5"
              component="h3"
              fontWeight={600}
              gutterBottom
            >
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {item.description}
            </Typography>
            <Typography
              variant="body1"
              fontWeight={600}
              gutterBottom
            >
              {item.stats}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {item.additional_info}
            </Typography>
            <Link href={item.learn_more_link} passHref>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  textTransform: "none",
                  borderRadius: 20,
                  padding: "8px 16px",
                  mt: 1
                }}
              >
                Learn More
              </Button>
            </Link>
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default AboutServices;
