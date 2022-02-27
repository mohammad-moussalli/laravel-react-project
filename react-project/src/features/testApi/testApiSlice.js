import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const testApi = createApi({
        reducerPath: 'testApi',
        baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
        endpoints: (builder) => ({
            getUsers: builder.query({
            query: (name) => `users`,
        }),
    }),
    })

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery } = testApi