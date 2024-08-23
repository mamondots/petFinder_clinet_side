import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const adoptionRequestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAdoptionRequest: build.mutation({
      query: (data) => {
        // console.log(data);
        
        return {
          url: "/adoption-requests",
          method: "POST",
          data,
        };
      },
      invalidatesTags: [tagTypes.adoptionRequest],
    }),

    getAllAdoptionRequests: build.query({
      query: () => ({
        url: "/adoption-requests",
        method: "GET",
      }),
      providesTags: [tagTypes.adoptionRequest],
    }),

    getMyAdoptionRequests: build.query({
      query: () => ({
        url: "/adoption-requests/my-adoption",
        method: "GET",
      }),
      providesTags: [tagTypes.adoptionRequest],
    }),

    updateAdoptionRequest: build.mutation({
      query: (data) => ({
        url: `/adoption-requests/${data?.id}`,
        method: "PUT",
        data: data?.body,
      }),
      invalidatesTags: [tagTypes.adoptionRequest],
    }),

    updateAdoptionRequestStatus: build.mutation({
      query: (data) => ({
        url: `/adoption-requests/${data?.id}/status`,
        method: "PATCH",
        data: { status: data?.status },
      }),
      invalidatesTags: [tagTypes.adoptionRequest],
    }),

    deleteAdoptionRequest: build.mutation({
      query: (id) => ({
        url: `/adoption-requests/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.adoptionRequest],
    }),
  }),
});

export const {
  useCreateAdoptionRequestMutation,
  useGetAllAdoptionRequestsQuery,
  useGetMyAdoptionRequestsQuery,
  useUpdateAdoptionRequestMutation,
  useUpdateAdoptionRequestStatusMutation,
  useDeleteAdoptionRequestMutation,
} = adoptionRequestApi;
