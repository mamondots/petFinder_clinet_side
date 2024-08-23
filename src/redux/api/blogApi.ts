import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBlog: build.mutation({
      query: (data) => {
        // console.log(data);
        
        return {
          url: "/blog/add-blog",
          method: "POST",
          data,
        };
      },
      invalidatesTags: [tagTypes.blog],
    }),

    publishBlog: build.mutation({
      query: () => {
        return {
          url: "/blog/add-blog",
          method: "PATCH",
        //   data,
        };
      },
      invalidatesTags: [tagTypes.blog],
    }),

    getAllBlogs: build.query({
      query: () => ({
        url: "/blog",
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),

    getMyBlogs: build.query({
      query: () => ({
        url: "/blog/my-blogs",
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),

    getABlog: build.query({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "GET"
      }),
      providesTags: [tagTypes.blog],
    }),

    updateBlog: build.mutation({
      query: (data) => ({
        url: `/blog/${data?.id}`,
        method: "PUT",
        data,
      }),
      invalidatesTags: [tagTypes.blog],
    }),

    deleteBlog: build.mutation({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.blog],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetAllBlogsQuery,
  useGetMyBlogsQuery,
  useGetABlogQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
