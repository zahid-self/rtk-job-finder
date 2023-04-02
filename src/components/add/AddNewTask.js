import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useGetProjectsQuery } from '../../features/projects/projectApi';
import { useAddTaskMutation } from '../../features/tasks/tasksApi';
import { useGetTeamQuery } from '../../features/teams/teamApi';

const AddNewTask = () => {

    const[taskName,setTaskName]= useState('');
    const[teamMember,setTeamMember]= useState();
    const[project,setProject]= useState();
    const[deadline,setDeadline]= useState('');
    const navigate = useNavigate()

    const{data : projects} = useGetProjectsQuery();
    const{data : teamMembers} = useGetTeamQuery();
    const[addProject] = useAddTaskMutation()

    const handleSubmit = (e) => {
      e.preventDefault();
      const selectedProject = projects.find(p => p.id == project);
      const selectedTeamMember = teamMembers.find(t => t.id == teamMember);
      addProject({
        taskName,
        teamMember: selectedTeamMember,
        project: selectedProject,
        deadline,
        status: 'inProgress'
      })
      navigate('/')
    }

    return (
      <div className="container relative">
        <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
          <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
            Create Task for Your Team
          </h1>

          <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="fieldContainer">
                <label htmlFor="lws-taskName">Task Name</label>
                <input
                  type="text"
                  name="taskName"
                  id="lws-taskName"
                  required
                  placeholder="Implement RTK Query"
                  onChange={(e) => setTaskName(e.target.value)}
                />
              </div>

              <div className="fieldContainer">
                <label>Assign To</label>
                <select name="teamMember" id="lws-teamMember" required onChange={(e) => setTeamMember(e.target.value)}>
                  <option value="" hidden selected>Select TeamMember</option>
                  {
                    teamMembers && teamMembers.map((tmember) => (
                      <option key={tmember.id} value={tmember.id}>{tmember.name}</option>
                    ))
                  }
                </select>
              </div>
              <div className="fieldContainer">
                <label htmlFor="lws-projectName">Project Name</label>
                <select id="lws-projectName" name="projectName" required onChange={(e) => setProject(e.target.value)}>
                  <option value="" hidden selected>Select Project</option>
                  {
                    projects && projects.map((project) => (
                      <option key={project.id} value={project.id}>{project.projectName}</option>
                    ))
                  }
                </select>
              </div>

              <div className="fieldContainer">
                <label htmlFor="lws-deadline">Deadline</label>
                <input type="date" name="deadline" id="lws-deadline" required onChange={(e) => setDeadline(e.target.value)}/>
              </div>

              <div className="text-right">
                <button type="submit" className="lws-submit">Save</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    )
}

export default AddNewTask