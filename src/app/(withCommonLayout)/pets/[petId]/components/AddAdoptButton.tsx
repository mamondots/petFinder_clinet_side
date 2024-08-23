"use client";

import { Button } from "@mui/material";
import AddAdoptModal from "./AddAdoptModal";
import { useState } from "react";
import { useGetMyProfileQuery } from "@/redux/api/userApi";

const AddAdoptButton = ({ petId, user }: { petId: string; user: any }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading } = useGetMyProfileQuery({});

  return (
    <>
      <AddAdoptModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        petId={petId}
        data={data}
      />
      <Button
        fullWidth
        disabled={user.role !== "USER"}
        onClick={() => setIsModalOpen(true)}
        sx={{ mt: 4 }}
      >
        Apply to Adopt
      </Button>
    </>
  );
};

export default AddAdoptButton;
