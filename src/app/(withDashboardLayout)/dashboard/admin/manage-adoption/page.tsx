"use client";

import { useDeleteAdoptionRequestMutation, useGetAllAdoptionRequestsQuery } from "@/redux/api/adoptionApi";
import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import UpdateAdoptStatusModal from "./components/UpdateAdoptModal";
import { toast } from "sonner";
import LoadingPage from "@/components/Shared/Loader/LoadingPage";

const ManageAdoptionPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const { data, isLoading } = useGetAllAdoptionRequestsQuery({});
  const [deleteAdoptionRequest] = useDeleteAdoptionRequestMutation();
  // console.log(data);

  const handleEditClick = (pet: any) => {
    setSelectedPet(pet);
    setIsModalOpen(true);
  };

  const handleAdoptDelete = async(id: any) =>{
    try {
      const res = await deleteAdoptionRequest(id);
      // console.log(res);
      if (res?.data?.id) {
        toast.success("Adoption deleted successfully!");
      }
      
    } catch (error: any) {
      toast.error(error.message);
      console.error(error.message);
    }
  }

  const columns: GridColDef[] = [
    {
      field: "user.name",
      headerName: "Req. User",
      flex: 1,
      renderCell: ({ row }) => {
        return <Box>{row.user ? row.user.name : "Unknown"}</Box>;
      },
    },
    {
      field: "user.email",
      headerName: "User Email",
      flex: 1,
      renderCell: ({ row }) => {
        return <Box>{row.user ? row.user.email : "Unknown"}</Box>;
      },
    },
    {
      field: "pet.name",
      headerName: "Pet Name",
      flex: 1,
      renderCell: ({ row }) => {
        return <Box>{row.pet ? row.pet.name : "Unknown"}</Box>;
      },
    },
    {
      field: "image",
      headerName: "Pet Image",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row.pet.image} width={40} height={40} alt="Pet Image" />
          </Box>
        );
      },
    },
    { field: "animalSleep", headerName: "Animal Sleep", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
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
            <IconButton onClick={() => handleAdoptDelete(row?.id)} color="primary" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <>
    <UpdateAdoptStatusModal
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
        <LoadingPage />
      )}
    </Box>
    </>
  );
};

export default ManageAdoptionPage;
