import { useEffect, useState } from "react";
import "./ToDoList.css";

function ToDoList() {
    

    const [todos, setTodos] = useState([]);

    // Lifecycle hooks 
    // Created->Mounted -->rendered-destoryed 

    // Lifecycle hook executes after component is rendered
    //It will call api to get data for component 


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(content=> setTodos(content));
    }, []);

    return (
        <div>
            <a href="/NewTodo" className="btn btn-primary float-start">
                NewPost
            </a>
        <br /><br />

        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">User ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Completed</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos &&
                    todos.map(item =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.userid}</td>
                            <td>{item.title}</td>
                            <td>{item.completed ? 'Yes' : 'No'}</td>
                        </tr>

                    )
                }

            </tbody>
        </table>
        </div>
    );
}

export default ToDoList;