import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useGetProjectsQuery } from '../../features/projects/projectApi';
import { useGetTaskQuery } from '../../features/tasks/tasksApi';
import { useGetTeamQuery } from '../../features/teams/teamApi';
import EditForm from './EditForm';

const EditJob = () => {

    const{taskId} = useParams();
    const{data : task, isError,isLoading,error} = useGetTaskQuery(taskId);
    
    let content = null;

    if(isLoading) content = <div>Loading...</div>

    if(!isLoading && isError) content = <div>{error?.message}</div>

    if(!isLoading && !isError && !task.id) content = <div>No task found</div>

    if(!isLoading && !isError && task.id){
        content = <EditForm task={task}/>
    }

    return (
      <div className="container relative">
        <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
          <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">Edit Task</h1>
          {content}
        </main>
      </div>
    )
}

export default EditJob