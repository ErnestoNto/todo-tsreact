import * as React from 'react';

//CSS
import * as C from './Modal'

export interface IModalProps {
    children: React.ReactNode
}

const closeModal = () => {
    const modal = document.getElementById('modal')
    modal?.classList.add('hide')
}

export default function Modal ({children}: IModalProps) {
  return (
    <div id='modal' className='hide'>
      <C.Fade onClick={closeModal}></C.Fade>
      <C.Modal>
        <h2>Atualizar tarefa</h2>
        {children}
      </C.Modal>
    </div>
  );
}
