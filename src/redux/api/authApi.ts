import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    changePassword: build.mutation({
      query: (data) => ({
        url: `/auth/change-password`,
        method: "POST",
        data,
      }),
      invalidatesTags: [],
    }),
    refreshToken: build.mutation({
      query: (data) => {
        return {
          url: `/auth/refresh-token`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [],
    }),
    
    forgotPassword: build.mutation({
      query: (data) => {
        // Log the data to the console
        console.log("Forgot Password Data:", data);
        
        return {
          url: `/auth/forgot-password`,
          method: "POST",
          data,
        };
      },
      invalidatesTags: [],
    }),
    resetPassword: build.mutation({
      query: (data) => ({
        url: `/auth/reset-password`,
        method: "POST",
        data,
      }),
      invalidatesTags: [],
    }),
  }),
});

export const {
  useChangePasswordMutation,
  useRefreshTokenMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
