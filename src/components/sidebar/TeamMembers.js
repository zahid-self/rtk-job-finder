import React from 'react'
import { useGetTeamQuery } from '../../features/teams/teamApi'

const TeamMembers = () => {

    const{data : teamMembers, isLoading,isError, error} = useGetTeamQuery()

    let content = null;

    if(isLoading) content = <div>Loading...</div>

    if(!isLoading && isError) content = <div>{error}</div>

    if(!isLoading && !isError && teamMembers.length === 0) content = <div>No projects found</div>

    if(!isLoading && !isError && teamMembers.length > 0){
        content = teamMembers.map((tmember) => (
          <div className="checkbox-container" key={tmember.id}>
              <img src={tmember.avatar} className="team-avater" alt='Sumit'/>
              <p className="label">{tmember.name}</p>
          </div>
        ))
    }

    return (
      <div className="mt-8">
          <h3 className="text-xl font-bold">Team Members</h3>
          <div className="mt-3 space-y-4">
            {content}
          </div>
      </div>
    )
}

export default TeamMembers