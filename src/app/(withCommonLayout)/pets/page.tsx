"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Pagination,
  Typography,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import FilterSidebar from "./components/FilterSidebar/FilterSidebar";
import PetCard from "./components/petCard/PetCard";
import LoadingPage from "@/components/Shared/Loader/LoadingPage";

const PetsPage = () => {
  const [pets, setPets] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    species: "",
    breed: "",
    age: "",
    size: "",
    location: "",
    color: "",
    gender: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      setLoading(true);
      try {
        const cleanedFilters = Object.fromEntries(
          Object.entries(filters).filter(([_, value]) => value)
        );

        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/pets`,
          {
            params: {
              limit: 9,
              page,
              ...cleanedFilters,
            },
          }
        );
        setPets(data.data);
        setTotalPages(Math.ceil(data.meta.total / 9));
      } catch (error) {
        console.error("Error fetching pets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, [page, filters]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <Container sx={{ my: 4 }}>
      <Box sx={{ display: { md: "flex" }, gap: 4 }}>
        <FilterSidebar filters={filters} setFilters={setFilters} />
        <Box sx={{ flex: 1 }}>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "80vh",
              }}
            >
              <CircularProgress sx={{ mb: 2 }} />
              <Typography variant="h6" color="text.secondary">
                Loading pets...
              </Typography>
            </Box>
          ) : (
            <>
              <Grid container spacing={4}>
                {pets.map((pet: any) => (
                  <Grid item xs={12} sm={6} md={4} key={pet.id}>
                    <PetCard pet={pet} />
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
                  variant="outlined"
                  shape="rounded"
                />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default PetsPage;
