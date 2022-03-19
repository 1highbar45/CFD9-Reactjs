import React, { useState } from 'react'
import styles from './style.module.scss'

export default function ToDoList({ toDoList, handleAdd, handleCompleted, handleUndone }) {
    const [value, setValue] = useState('')

    const _handleAdd = () => {
        handleAdd(value)
        setValue("")
    }

    const _onKeyUp = (ev) => {
        if (ev.key === 'Enter') {
            _handleAdd()
        }
    }

    return (
        <div className={styles.toDoList}>
            <div className="input-group">
                <input onKeyUp={_onKeyUp} value={value} onChange={ev => setValue(ev.target.value)} type="text" placeholder='Nhap cong viec..' />
                <button disabled={!value} onClick={_handleAdd}>Add</button>
            </div>
            <h1>Dashboard</h1>
            <div className="card-list">
                <div className="card">
                    <h2>Viec chua lam</h2>
                    {
                        toDoList.filter(e => !e.isCompleted).map(e => <ToDoItem key={e.id} {...e} handleCompleted={() => handleCompleted(e)} />)
                    }
                </div>
                <div className="card">
                    <h2>Viec da lam</h2>
                    {
                        toDoList.filter(e => e.isCompleted).map(e => <ToDoItem key={e.id} {...e} handleUndone={() => handleUndone(e)} />)
                    }
                </div>
            </div>
        </div>
    )
}

function ToDoItem({ name, isCompleted, handleCompleted, handleUndone }) {
    return (
        <div className={`to-do-item ${isCompleted ? 'isCompleted' : ''}`}>
            <div className="name">{name}</div>
            {
                isCompleted ? <button onClick={handleUndone}> X </button> : <button onClick={handleCompleted}> 🗸 </button>
            }

        </div>
    )
}
