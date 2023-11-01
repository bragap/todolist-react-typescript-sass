// interfaces 
import { ITask } from '../interfaces/Task'

// styles
import styles from "./TaskList.module.css"

type Props = {
  taskList: ITask[],
  handleDelete(id : number): void,
  handleEdit(task: ITask):void
}

const TaskList = ({taskList, handleDelete, handleEdit}: Props) => {
 
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => {
          if (task.title && task.difficulty) {
            return (
              <div key={task.id} className={styles.task}>
                <div className={styles.details}>
                  <h4>{task.title}</h4>
                  <p>Dificuldade: {task.difficulty}</p>
                </div>
                <div className={styles.actions}>
                  <i className="bi bi-pencil" onClick={() => {
                    handleEdit(task)
                  }}></i>
                  <i className="bi bi-trash" onClick={() => {handleDelete(task.id)}}></i>
                </div>
              </div>
            );
          }
          return null;
        })
      ) : (
        <p>Não há tarefas cadastradas!</p>
      )}
    </>
  )
}

export default TaskList