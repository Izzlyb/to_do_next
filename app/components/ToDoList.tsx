import React from 'react'
import Task from './Task'
import { ITask } from '@/types/tasks'

interface TodoListProps {
  tasks: ITask[]
}

const ToDoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default ToDoList