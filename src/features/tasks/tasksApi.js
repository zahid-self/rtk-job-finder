import { apiSlice } from "../api/apiSlice";

export const tasksApi = apiSlice.injectEndpoints({
    endpoints: (build) =>( {
        getTasks : build.query({
            query: () => '/tasks'
        }),
        addTask: build.mutation({
            query : (data) => ({
                url: '/tasks',
                method: 'POST',
                body: data
            })
        })
    })
})

export const {useGetTasksQuery, useAddTaskMutation} = tasksApi;