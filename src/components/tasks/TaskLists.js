import React from 'react'
import { useGetTasksQuery } from '../../features/tasks/tasksApi';
import TaskITem from './TaskITem'


const TaskLists = () => {

    const{data : tasks, isLoading, isError, error} = useGetTasksQuery()

    let content = null;

    if(isLoading) content = <div>Loading...</div>

    if(!isLoading && isError) content = <div>{error?.message}</div>

    if(!isLoading && !isError && tasks.length === 0) content = <div>No projects found</div>

    if(!isLoading && !isError && tasks.length > 0){
        content = tasks.map((task) => <TaskITem key={task.id} task={task}/>)
    }

    return (
      <div className="lws-task-list">
          {content}
      </div>
    )
}

export default TaskLists