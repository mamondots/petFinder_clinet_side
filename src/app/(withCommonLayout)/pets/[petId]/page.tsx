import { Box, Button, Container, Typography, Stack } from "@mui/material";
import Image from "next/image";
import GradeIcon from "@mui/icons-material/Grade";
import AddAdoptButton from "./components/AddAdoptButton";
import { cookies } from "next/headers";
import { decodedToken } from "@/utils/jwt";

const PetDetail = ({ label, value }: { label: string; value: string }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      gap: 2,
      fontSize: { xs: "0.875rem", md: "1rem" },
    }}
  >
    <Typography variant="body2">{label}</Typography>
    <Typography
      sx={{
        textAlign: "left",
      }}
      variant="body2"
    >
      {value}
    </Typography>
  </Box>
);

const Section = ({ title, children }: { title: string; children: any }) => (
  <Box sx={{ mt: { xs: 2, md: 4 } }}>
    <Typography
      textTransform="uppercase"
      variant="body1"
      mb={1}
      fontSize={{ xs: "1rem", md: "1.125rem" }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

const PetDetailsPage = async ({ params }: { params: any }) => {
  const accessToken = cookies().get("accessToken")?.value;

  const user: any = accessToken && decodedToken(accessToken);
  console.log(user);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/pets/${params?.petId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${accessToken}`,
      },
    }
  );

  if (!res.ok) {
    console.error("Failed to fetch pet details:", res.statusText);
    return (
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Typography variant="h6" color="error">
          Failed to load pet details. Please try again later.
        </Typography>
      </Container>
    );
  }

  const { data: pet } = await res.json();

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 2, md: 6 },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "60%" },
            overflow: "hidden",
            borderRadius: "10px",
            "&:hover img": {
              transform: "scale(1.1)",
              transition: "transform 0.9s ease",
            },
          }}
        >
          <Image
            src={pet?.image}
            height={600}
            width={600}
            alt="Pet Image"
            layout="responsive"
          />
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            padding: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: { xs: 2, md: 4 },
            }}
          >
            <Typography variant="h5" fontSize={{ xs: "1.5rem", md: "2rem" }}>
              {pet?.name}
            </Typography>
            <Box
              sx={{
                color: "green",
                padding: "4px 10px",
                borderRadius: "10px",
                backgroundColor: "#faf5ff",
              }}
            >
              <Typography>Available to adopt</Typography>
            </Box>
          </Box>
          <Typography
            textTransform="uppercase"
            mt={2}
            mb={2}
            fontSize={{ xs: "1rem", md: "1.125rem" }}
          >
            About
          </Typography>
          <Stack direction="column" gap={1.5}>
            <PetDetail label="Breed" value={pet?.breed} />
            <PetDetail label="Color" value={pet?.color} />
            <PetDetail label="Age" value={`${pet?.age} years old`} />
            <PetDetail label="Gender" value={pet?.gender} />
            <PetDetail label="Arrived Date" value={pet?.createdAt} />
            <PetDetail label="Arrived From" value={pet?.user?.address} />
            <PetDetail label="Size" value={pet?.size} />
            <PetDetail label="Location" value={pet?.location} />
            <PetDetail label="Rehoming Fee" value={"$180"} />
          </Stack>
          <AddAdoptButton petId={pet?.id} user={user} />
        </Box>
      </Box>

      <Section title="Description">
        <Typography variant="body2" fontSize={{ xs: "0.875rem", md: "1rem" }}>
          {pet?.description}
        </Typography>
      </Section>

      <Section title="Favorites Things">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            fontSize: { xs: "0.875rem", md: "1rem" },
          }}
        >
          <Typography variant="body2">
            <GradeIcon fontSize="small" /> Belly Rubs
          </Typography>
          <Typography variant="body2">
            <GradeIcon fontSize="small" /> Lead Walks
          </Typography>
          <Typography variant="body2">
            <GradeIcon fontSize="small" /> Playing with Toys
          </Typography>
          <Typography variant="body2">
            <GradeIcon fontSize="small" /> Cuddles on Sofa
          </Typography>
        </Box>
      </Section>

      <Section title="Home Requirements">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          <Box>
            <Typography variant="body2" fontWeight={600}>
              Minimum age of children?
            </Typography>
            <Typography variant="body2">8</Typography>
          </Box>
          <Box>
            <Typography variant="body2" fontWeight={600}>
              Can they live with dogs?
            </Typography>
            <Typography variant="body2">Can live with a dog</Typography>
          </Box>
          <Box>
            <Typography variant="body2" fontWeight={600}>
              Can they live with cats?
            </Typography>
            <Typography variant="body2">Cannot live with cats</Typography>
          </Box>
        </Box>
      </Section>

      <Section title="Medical History">
        <Typography variant="body2" fontSize={{ xs: "0.875rem", md: "1rem" }}>
          {pet?.medicalHistory}
        </Typography>
      </Section>

      <Section title="Adoption Requirements">
        <Typography variant="body2" fontSize={{ xs: "0.875rem", md: "1rem" }}>
          {pet?.adoptionRequirements}
        </Typography>
      </Section>
    </Container>
  );
};

export default PetDetailsPage;
