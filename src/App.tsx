import React, { useState } from 'react';
import Footer from './components/Footer';
import FormTask from './components/FormTask';
import Header from './components/Header';
import Modal from './components/Modal';
import TaskList from './components/TaskList';

import { ITask } from './Interfaces/Task';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id:number) => {
    setTaskList(taskList.filter(task => task.id !== id))
  }

  const showOrHideModal = (display: boolean) => {
    const modal = document.getElementById('modal')
    
    if(display){
      modal?.classList.remove('hide')
    }else{
      modal?.classList.add('hide')
    }
  }

  const editTask = (task: ITask) => {
    showOrHideModal(true)
    setTaskToUpdate(task)    
  }

  const updateTask = (id:number, title:string, difficult:number) => {
    const updatedTask:ITask = {id, title, difficult}

    const updatedList = taskList.map(task => {
      return task.id === updatedTask.id ? updatedTask : task 
    })
    
    setTaskList(updatedList)
    showOrHideModal(false)
  }

  return (
    <div>
      <Modal children={<FormTask textButton='Atualizar tarefa' taskList={taskList} task={taskToUpdate} handleUpdate={updateTask}/>} />
      <Header />
      <main className='main'>
        <div>
          <h2>Lista de tarefa</h2>
          <FormTask
            textButton='Adicionar tarefa' 
            taskList={taskList} 
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TaskList 
            taskList={taskList} 
            handleDelete={deleteTask}
            handleEdit={editTask}  
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
