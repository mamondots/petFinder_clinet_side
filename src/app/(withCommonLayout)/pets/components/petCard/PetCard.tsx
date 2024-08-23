import { Box, Card, CardContent, CardActions, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const PetCard = ({ pet }: { pet: any }) => {
  return (
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
          Age: {pet.age} years | Breed: {pet.breed}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ fontSize: 14, mb: 1 }}
        >
          {pet.description?.length > 70
            ? pet.description.slice(0, 70) + "..."
            : pet.description}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          display="flex"
          alignItems="center"
          sx={{ fontSize: 12 }}
        >
          <LocationOnIcon fontSize="small" sx={{ mr: 0.5 }} /> {pet.location}
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
          href={`/pets/${pet.id}`}
          sx={{
            textTransform: "none",
            borderRadius: 20,
            padding: "6px 16px",
            mt: -1
          }}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default PetCard;
