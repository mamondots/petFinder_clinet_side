import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Pagination,
  Typography,
  CircularProgress,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";

const speciesOptions = ["Dog", "Cat", "Bird", "Rabbit", "Others"];
const breedOptions = [
  "Labrador Retriever",
  "Siamese",
  "German Shepherd",
  "Maine Coon",
  "Canary",
  "Holland Lop",
];
const sizeOptions = ["Large", "Medium", "Small"];
const colorOptions = [
  "White",
  "Cream",
  "Black",
  "Gray",
  "Golden",
  "Brown Tabby",
  "Brown and White",
];
const genderOptions = ["Male", "Female", "Other"];

const FilterSidebar = ({
  filters,
  setFilters,
}: {
  filters: any;
  setFilters: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFilters((prevFilters: any) => {
      const newFilters = { ...prevFilters };
      if (value) {
        newFilters[name] = value;
      } else {
        delete newFilters[name];
      }
      return newFilters;
    });
  };

  const handleReset = () => {
    setFilters({
      species: "",
      breed: "",
      age: "",
      size: "",
      location: "",
      color: "",
      gender: "",
    });
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "25%" },
        padding: 2,
        backgroundColor: "#f0f4f8",
        borderRadius: 2,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h6" component="h3" mb={2} fontWeight={600}>
        Filter Pets
      </Typography>
      <TextField
        select
        label="Species"
        name="species"
        value={filters.species}
        onChange={handleChange}
        fullWidth
        margin="normal"
        size="small"
        sx={{
          backgroundColor: "#fff",
          borderRadius: "4px",
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#3f51b5",
            },
          },
        }}
      >
        {speciesOptions.map((species, index) => (
          <MenuItem value={species} key={index}>
            {species}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Breed"
        name="breed"
        value={filters.breed}
        onChange={handleChange}
        fullWidth
        margin="normal"
        size="small"
        sx={{
          backgroundColor: "#fff",
          borderRadius: "4px",
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#3f51b5",
            },
          },
        }}
      >
        {breedOptions.map((breed, index) => (
          <MenuItem value={breed} key={index}>
            {breed}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Age"
        name="age"
        value={filters.age}
        onChange={handleChange}
        fullWidth
        margin="normal"
        size="small"
        sx={{
          backgroundColor: "#fff",
          borderRadius: "4px",
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#3f51b5",
            },
          },
        }}
      />
      <TextField
        select
        label="Size"
        name="size"
        value={filters.size}
        onChange={handleChange}
        fullWidth
        margin="normal"
        size="small"
        sx={{
          backgroundColor: "#fff",
          borderRadius: "4px",
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#3f51b5",
            },
          },
        }}
      >
        {sizeOptions.map((size, index) => (
          <MenuItem value={size} key={index}>
            {size}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Location"
        name="location"
        value={filters.location}
        onChange={handleChange}
        fullWidth
        margin="normal"
        size="small"
        sx={{
          backgroundColor: "#fff",
          borderRadius: "4px",
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#3f51b5",
            },
          },
        }}
      />
      <TextField
        select
        label="Color"
        name="color"
        value={filters.color}
        onChange={handleChange}
        fullWidth
        margin="normal"
        size="small"
        sx={{
          backgroundColor: "#fff",
          borderRadius: "4px",
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#3f51b5",
            },
          },
        }}
      >
        {colorOptions.map((color, index) => (
          <MenuItem value={color} key={index}>
            {color}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Gender"
        name="gender"
        value={filters.gender}
        onChange={handleChange}
        fullWidth
        margin="normal"
        size="small"
        sx={{
          backgroundColor: "#fff",
          borderRadius: "4px",
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#3f51b5",
            },
          },
        }}
      >
        {genderOptions.map((gender, index) => (
          <MenuItem value={gender} key={index}>
            {gender}
          </MenuItem>
        ))}
      </TextField>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleReset}
        sx={{ mt: 2, textTransform: "none" }}
        fullWidth
        size="small"
      >
        Reset Filters
      </Button>
    </Box>
  );
};

export default FilterSidebar;
