'use client'

import { FormEventHandler, useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import Modal from './Modal'

const AddTask = () => {
  const [modalOpen, setOpenModal] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>('');

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log('newTaskValue');
    setNewTaskValue("");
  };

  return (
    <div>
        <button onClick={() => setOpenModal(true)} className='btn btn-primary w-full'> 
          Add new task <AiOutlinePlus size={18}/>
        </button>

        <Modal modalOpen={modalOpen} setOpenModal={setOpenModal} >
          <form onSubmit={handleSubmitNewTodo}>
            <h3 className='font-bold text-lg'> Add New Task</h3>
            <div>
              <input type="text" 
                    value={newTaskValue}
                    onChange={(e) => setNewTaskValue(e.target.value)}
                    placeholder="Type here" 
                    className="input input-bordered w-full max-w-xs" />
              <button type='submit' className ="btn"> Submit </button>
            </div>
          </form>
        </Modal>
    </div>
  )
}

export default AddTask
