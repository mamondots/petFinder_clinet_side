import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const petApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPet: build.mutation({
      query: (data) => ({
        url: "/pets",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.pet],
    }),

    getAllPets: build.query({
      query: () => ({
        url: "/pets",
        method: "GET",
      }),
      providesTags: [tagTypes.pet],
    }),

    getMyPets: build.query({
      query: () => ({
        url: "/pets/my-pets",
        method: "GET",
      }),
      providesTags: [tagTypes.pet],
    }),

    getAPet: build.query({
      query: (petId) => ({
        url: `/pets/${petId}`,
        method: "GET",
      }),
      providesTags: (result, error, arg) => [{ type: tagTypes.pet, id: arg }],
    }),

    updatePet: build.mutation({
      query: (data) => ({
        url: `/pets/${data?.id}`,
        method: "PUT",
        body: data.body,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: tagTypes.pet, id: arg.petId },
      ],
    }),

    deletePet: build.mutation({
      query: (id) => ({
        url: `/pets/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [
        { type: tagTypes.pet, id: arg },
      ],
    }),
  }),
});

export const {
  useCreatePetMutation,
  useGetAllPetsQuery,
  useGetMyPetsQuery,
  useGetAPetQuery,
  useUpdatePetMutation,
  useDeletePetMutation,
} = petApi;
