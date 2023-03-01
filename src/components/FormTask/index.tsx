import * as React from 'react';

//CSS
import * as C from './Form'

//Interfaces
import { ITask } from '../../Interfaces/Task'

export interface IFormTaskProps {
    textButton: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    task?:ITask | null
    handleUpdate?(id:number, title:string, difficult:number): void
}

export default function FormTask ({textButton, taskList, setTaskList, task, handleUpdate}: IFormTaskProps) {
    const [id, setId] = React.useState<number>(0)
    const [title, setTitle] = React.useState<string>('')
    const [difficult, setDifficult] = React.useState<number>(0)

    React.useEffect(() => {
        if(task){
            setId(task.id)
            setTitle(task?.title)
            setDifficult(task?.difficult)
        }
    }, [task])

    const addTask = (e:React.FormEvent) => {
        e.preventDefault()

        if(task){
            handleUpdate!(id, title, difficult)
        }else{

            const id = Math.floor(Math.random() * 1000)

            const newTask:ITask = {id, title, difficult}

            setTaskList!([...taskList, newTask])
            localStorage.setItem('@tasks', JSON.stringify([newTask]))

            setTitle('')
            setDifficult(0)
        }
    }
  return (
    <C.Form onSubmit={addTask}>
        <div>
            <C.Label htmlFor="title">Titulo: </C.Label>
            <C.Input 
                type="text"
                placeholder='Digite sua tarefa' 
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                value={title}
            />
        </div>
        <div>
            <C.Label htmlFor="title">Dificuldade: </C.Label>
            <C.Input 
                type="text"
                placeholder='Digite a dificuldade da tarefa' 
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setDifficult(parseFloat(e.target.value))}
                value={difficult}
            />
        </div>
        <C.SubmitButton>{textButton}</C.SubmitButton>
    </C.Form>
  );
}
