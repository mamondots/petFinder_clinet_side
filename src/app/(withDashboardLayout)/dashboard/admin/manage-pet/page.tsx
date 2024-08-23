"use client";

import { useDeletePetMutation, useGetAllPetsQuery } from "@/redux/api/petApi";
import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import Image from "next/image";
import { useState } from "react";
import UpdatePetModal from "./components/UpdatePetModal";
import { toast } from "sonner";
import LoadingPage from "@/components/Shared/Loader/LoadingPage";

const ManagePet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const { data, isLoading } = useGetAllPetsQuery({});
  const [deletePet] = useDeletePetMutation();
  // console.log(data);

  const handleEditClick = (pet: any) => {
    setSelectedPet(pet);
    setIsModalOpen(true);
  };

  const handleAdoptDelete = async(id: any) =>{
    try {
      const res = await deletePet(id);
      // console.log(res);
      if (res?.data?.id) {
        toast.success("Pet deleted successfully!");
      }
      
    } catch (error: any) {
      toast.error(error.message);
      console.error(error.message);
    }
  }

  const columns: GridColDef[] = [
    { field: "name", headerName: "Pet Name", flex: 1 },
    {
      field: "image",
      headerName: "Pet Image",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row.image} width={40} height={40} alt="Pet Image" />
          </Box>
        );
      },
    },
    { field: "species", headerName: "Species", flex: 1 },
    { field: "color", headerName: "Color", flex: 1 },
    { field: "age", headerName: "Age", flex: 1 },
    { field: "size", headerName: "Size", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box display="flex" gap={1}>
            <IconButton onClick={() => handleEditClick(row)} color="primary" aria-label="delete">
            <EditIcon />
          </IconButton>
            <IconButton onClick={() => handleAdoptDelete(row.id)} color="primary" aria-label="delete">
            <DeleteIcon />
          </IconButton>
            </Box>
        );
      },
    },
  ];

  return (
    <>
    <UpdatePetModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        data={selectedPet}
      />
    <Box>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid
            rows={data ?? []}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </Box>
      ) : (
        <LoadingPage/>
      )}
    </Box>
    </>
  );
};

export default ManagePet;
