import { baseApi } from "./baseApi";
import { tagTypes } from "../tagTypes";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => ({
        url: "/user/users",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    getMyProfile: build.query({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    changeUserRole: build.mutation({
      query: (userData) => {
        return {
          url: `/user/${userData?.id}/change-role`,
          method: "PATCH",
          data: { role: userData?.role },
        };
      },
      invalidatesTags: [tagTypes.user],
    }),

    changeProfileStatus: build.mutation({
      query: (userData) => ({
        url: `/user/${userData?.id}/status`,
        method: "PATCH",
        data: { status: userData?.status },
      }),
      invalidatesTags: [tagTypes.user],
    }),

    updateMyProfile: build.mutation({
      query: (data) => {
        // console.log(data);

        return {
          url: "/user/profile",
          method: "PUT",
          data,
        };
      },

      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetMyProfileQuery,
  useChangeUserRoleMutation,
  useChangeProfileStatusMutation,
  useUpdateMyProfileMutation,
} = userApi;
