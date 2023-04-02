import { apiSlice } from "../api/apiSlice";

export const tasksApi = apiSlice.injectEndpoints({
    endpoints: (build) =>( {
        getTasks : build.query({
            query: () => '/tasks'
        }),
        getTask : build.query({
            query: (id) => `/tasks/${id}`
        }),
        addTask: build.mutation({
            query : (data) => ({
                url: '/tasks',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(data,{dispatch,queryFulfilled}){
                const patchResult = dispatch(apiSlice.util.updateQueryData('getTasks',undefined,(draft) => {
                    draft.push(data)
                }))

                try {
                    await queryFulfilled
                } catch (error) {
                    patchResult.undo()
                }
            }
        }),
        editTask: build.mutation({
            query : ({id,data}) => ({
                url: `/tasks/${id}`,
                method: 'PATCH',
                body: data
            }),
            async onQueryStarted({id,data},{dispatch,queryFulfilled}){

                const updatePatchResult = dispatch(apiSlice.util.updateQueryData('getTasks',undefined,(draft) => {
                    const draftTask = draft.find(t => t.id == id);
                    draftTask.taskName = data?.taskName;
                    draftTask.teamMember = data?.teamMember;
                    draftTask.project = data?.project;
                    draftTask.deadline = data?.deadline;
                }))


                try {
                    await queryFulfilled
                } catch (error) {
                    updatePatchResult.undo()
                }
            }
        }),
        changeStatus: build.mutation({
            query: ({data, id}) => ({
                url: `/tasks/${id}`,
                method: 'PATCH',
                body: data
            }),
            async onQueryStarted({data,id},{dispatch,queryFulfilled}){
                const patchResult = dispatch(apiSlice.util.updateQueryData('getTasks',undefined,(draft) => {
                    const draftTask = draft.find(t => t.id == id);
                    draftTask.status = data.status
                }))

                try {
                    await queryFulfilled
                } catch (error) {
                    patchResult.undo()
                }
            }
        }),
        deleteTask: build.mutation({
            query : (id) => ({
                url: `/tasks/${id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(id,{dispatch,queryFulfilled}){
                const patchResult = dispatch(apiSlice.util.updateQueryData('getTasks',undefined,(draft) => {
                   const draftTaskIndex = draft.findIndex(t => t.id == id);
                   draft.splice(draftTaskIndex,1)
                }))

                try {
                    await queryFulfilled
                } catch (error) {
                    patchResult.undo()
                }
            }
        })
    })
})

export const {useGetTasksQuery, useGetTaskQuery , useAddTaskMutation, useEditTaskMutation , useChangeStatusMutation, useDeleteTaskMutation} = tasksApi;