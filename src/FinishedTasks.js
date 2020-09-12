import React from 'react'
import './FinishedTasks.css'

function FinishedTasks({ finishedTasks, deleteFinishedTask }) {

    return (
        <div className='finished-tasks'>
            <h2>Finished Tasks</h2>
            {finishedTasks.map(task => {
                return (
                    <div className="task">{task.content}<span onClick={() => deleteFinishedTask(task.id)}>X</span></div>
                )
            })}
        </div>
    )
}

export default FinishedTasks
