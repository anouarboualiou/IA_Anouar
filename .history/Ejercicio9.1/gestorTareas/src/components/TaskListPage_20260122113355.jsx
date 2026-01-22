import { tasks } from "../datos/tasks";
import {Link} from "react-router-dom"

function TaskListPage(){

    return (
        <>

        <h1>Lista de Tareas</h1>

        <ul>
            {
                tasks.map(task => {

                    return <li key={task.id}><Link to="">{task.title}</Link></li>
                })
                
            }
        </ul>


        </>
    )
}

export default TaskListPage