"use client";

import { useGetAllUsersQuery } from "@/redux/api/userApi";
import { Box, Button, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import UpdateUserRoleModal from "./components/UpdateRoleModal";
import UpdateUserStatusModal from "./components/UpdateStatusModal";
import LoadingPage from "@/components/Shared/Loader/LoadingPage";

const ManageUsersPage = () => {
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const { data, isLoading } = useGetAllUsersQuery({});
  //   console.log(data);

  const handleRoleEdit = (user: any) => {
    setSelectedUser(user);
    setIsRoleModalOpen(true);
  };

  const handleStatusEdit = (user: any) => {
    setSelectedUser(user);
    setIsStatusModalOpen(true);
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "User Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
    { field: "isDeleted", headerName: "User Deleting Status", flex: 1 },
    { field: "status", headerName: "User Status", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box display="flex" gap={1}>
            <IconButton onClick={() => handleRoleEdit(row)} color="primary" aria-label="delete">
              <ManageAccountsIcon />
            </IconButton>
            <IconButton onClick={() => handleStatusEdit(row)} color="primary" aria-label="delete">
              <EditIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
   <>
   <UpdateUserRoleModal
        open={isRoleModalOpen}
        setOpen={setIsRoleModalOpen}
        data={selectedUser}
      />
   <UpdateUserStatusModal
        open={isStatusModalOpen}
        setOpen={setIsStatusModalOpen}
        data={selectedUser}
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

export default ManageUsersPage;
