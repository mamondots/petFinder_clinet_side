import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";

const PetAdoptSection = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/pets?limit=4`
  );
  const { data: pets } = await res.json();
  // console.log(pets);

  return (
    <Container sx={{ my: 12 }}>
      {/* Section Heading */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h4" component="h1" fontWeight={700}>
          Pets Available for Adoption
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400} sx={{ mt: 2 }}>
          The PETFINDER wonderful adoptable dogs and cats are waiting for you
          right now!
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400}>
          View adoptable animals below.
        </Typography>
      </Box>

      {/* Pet Cards */}
      <Grid container spacing={4}>
        {pets?.map((pet: any) => (
          <Grid item key={pet.id} md={3} xs={12}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
                },
                backgroundColor: "#f8f9fa",
              }}
            >
              <Box sx={{ height: "250px", overflow: "hidden" }}>
                <Image
                  src={pet.image}
                  alt={pet.name}
                  width={500}
                  height={250}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </Box>
              <CardContent
                sx={{
                  // padding: 3,
                  textAlign: "left",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  fontWeight={600}
                  color="primary"
                >
                  {pet.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ fontSize: 14, mb: 1 }}
                >
                  Age: {pet?.age} years | Breed: {pet.breed}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ fontSize: 14, mb: 1 }}
                >
                  {pet?.description?.length > 70
                    ? pet?.description.slice(0, 70) + "..."
                    : pet?.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  display="flex"
                  alignItems="center"
                  sx={{ fontSize: 12 }}
                >
                  <LocationOnIcon fontSize="small" sx={{ mr: 0.5 }} />{" "}
                  {pet.location}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: "center",
                  paddingBottom: 2,
                }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  component={Link}
                  href={`/pets/${pet?.id}`}
                  sx={{
                    textTransform: "none",
                    borderRadius: 20,
                    padding: "6px 16px",
                    mt: -1,
                  }}
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* View All Button */}
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Button
          component={Link}
          href="/pets"
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
          View All Pets
        </Button>
      </Box>
    </Container>
  );
};

export default PetAdoptSection;
