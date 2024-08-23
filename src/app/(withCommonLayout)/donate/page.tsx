import { Container } from "@mui/material";
import DonateBanner from "./components/DonateBanner/DonateBanner";
import DonateSection from "./components/DonateSection/DonateSection";

const page = () => {
  return (
    <Container sx={{ my: 4 }}>
      <DonateBanner />
      <DonateSection />
    </Container>
  );
};

export default page;
