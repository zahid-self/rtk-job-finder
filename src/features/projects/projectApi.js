import { apiSlice } from "../api/apiSlice"

export const projectsApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getProjects : build.query({
            query: () => '/projects'
        })
    })
})

export const { useGetProjectsQuery } = projectsApi