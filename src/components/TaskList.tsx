// interfaces 
import { ITask } from '../interfaces/Task'

// styles
import styles from "./TaskList.module.css"

type Props = {
  taskList: ITask[]
}

const TaskList = (props: Props) => {
  return (
    <>
      {props.taskList.length > 0 ? (
        props.taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className="bi bi-pencil"></i>
              <i className="bi bi-trash"></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas!</p>
      )}
    </>
  )
}

export default TaskList