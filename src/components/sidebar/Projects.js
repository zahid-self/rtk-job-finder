import React, { useState } from 'react'
import { useGetProjectsQuery } from '../../features/projects/projectApi'

const Projects = () => {

    const{data : projects,isLoading,isError,error} = useGetProjectsQuery();
    const[projectChecked,setProjectChecked] = useState(true) 

    const handleChange = (id) => {
        setProjectChecked(prevChecked => !prevChecked)
    }

    let content = null;

    if(isLoading) content = <div>Loading...</div>

    if(!isLoading && isError) content = <div>{error}</div>

    if(!isLoading && !isError && projects.length === 0) content = <div>No projects found</div>

    if(!isLoading && !isError && projects.length > 0){
        content = projects.map((project) => (
            <div key={project.id} className="checkbox-container">
                <input type="checkbox" className={project.colorClass} checked={projectChecked} onChange={() => handleChange(project.id)}/>
                <p className="label">{project.projectName}</p>
            </div>
        ))
    }

    return (
        <div>
            <h3 className="text-xl font-bold">Projects</h3>
            <div className="mt-3 space-y-4">
                {content}
            </div>
        </div>
    )
}

export default Projects