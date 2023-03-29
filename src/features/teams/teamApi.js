import { apiSlice } from "../api/apiSlice";

const teamApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getTeam: build.query({
            query: () => '/team'
        })
    })
});

export const {useGetTeamQuery} = teamApi