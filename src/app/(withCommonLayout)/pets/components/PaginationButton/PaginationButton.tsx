// app/pets/components/ClientPagination.tsx

"use client";

import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";

const PaginationButton = ({ currentPage, totalPages, filters }: { currentPage: number; totalPages: number; filters: any }) => {
  const router = useRouter();

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const query = new URLSearchParams(window.location.search);
    query.set("page", value.toString());
    for (const key in filters) {
      if (filters[key]) {
        query.set(key, filters[key]);
      }
    }
    router.push(`/pets?${query.toString()}`);
  };

  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={handlePageChange}
      variant="outlined"
      shape="rounded"
    />
  );
};

export default PaginationButton;
