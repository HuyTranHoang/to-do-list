import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todoList.module.scss'

export default function ToDoList() {
  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        ToDoList
        <TaskInput />
        <TaskList />
        <TaskList doneTaskList />
      </div>
    </div>
  )
}
