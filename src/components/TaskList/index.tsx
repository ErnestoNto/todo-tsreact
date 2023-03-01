import * as React from 'react';

//CSS
import * as C from './TaskList'

import { ITask } from '../../Interfaces/Task';

export interface ITaskListProps {
    taskList: ITask[]
    handleDelete(id:number): void 
    handleEdit(task: ITask): void
}

export default function TaskList ({taskList, handleDelete, handleEdit}: ITaskListProps) {

  return (
    <div>
     {taskList.length > 0 ? (
      taskList.map(task => {
        return (
          <C.TaskContainer key={task.id}>
            <C.Content>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficult}</p>
            </C.Content>
            <C.Action>
              <i className="bi bi-pencil" onClick={() => handleEdit(task)}></i>
              <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
            </C.Action>
          </C.TaskContainer>
        )
       })
     ) : (
      <p>Não há tarefas ainda</p>
     )}
    </div>
  );
}
