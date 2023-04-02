import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useGetProjectsQuery } from '../../features/projects/projectApi';
import { useEditTaskMutation } from '../../features/tasks/tasksApi';
import { useGetTeamQuery } from '../../features/teams/teamApi';

const EditForm = ({task}) => {

    const{data : projects} = useGetProjectsQuery();
    const{data : teamMembers} = useGetTeamQuery();
    const[editTask] = useEditTaskMutation();
    const navigate = useNavigate()

    const[taskName,setTaskName]= useState(task?.taskName);
    const[teamMember,setTeamMember]= useState(task?.teamMember?.id);
    const[project,setProject]= useState(task?.project?.id);
    const[deadline,setDeadline]= useState(task?.deadline);

    

    const handleEditSubmit = (e) => {
        e.preventDefault();

        const selectedProject = projects?.find(p => p.id == project);
        const selectedTeamMember = teamMembers?.find(t => t.id == teamMember);

        editTask({
            id: task?.id,
            data: {
                taskName,
                teamMember: selectedTeamMember,
                project: selectedProject,
                deadline
            }
        })
        navigate('/')
    }


    return (
        <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
            <form className="space-y-6" onSubmit={handleEditSubmit}>
                <div className="fieldContainer">
                    <label htmlFor="lws-taskName">Task Name</label>
                    <input
                        type="text"
                        name="taskName"
                        id="lws-taskName"
                        required
                        placeholder="Implement RTK Query"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                    />
                </div>

                <div className="fieldContainer">
                    <label>Assign To</label>
                    <select name="teamMember" id="lws-teamMember" value={teamMember} required onChange={(e) => setTeamMember(e.target.value)}>
                        {
                        teamMembers && teamMembers.map((tmember) => (
                            <option key={tmember.id} value={tmember.id}>{tmember.name}</option>
                        ))
                        }
                    </select>
                </div>
                <div className="fieldContainer">
                    <label htmlFor="lws-projectName">Project Name</label>
                    <select id="lws-projectName" name="projectName" value={project}  onChange={(e) => setProject(e.target.value)} required>
                        {
                        projects && projects.map((project) => (
                            <option key={project.id} value={project.id}>{project.projectName}</option>
                        ))
                        }
                    </select>
                </div>

                <div className="fieldContainer">
                    <label htmlFor="lws-deadline">Deadline</label>
                    <input 
                        type="date" 
                        name="deadline" 
                        id="lws-deadline" 
                        required
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                    />
                </div>

                <div className="text-right">
                    <button type="submit" className="lws-submit">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditForm