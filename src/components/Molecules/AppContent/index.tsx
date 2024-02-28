import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { deleteTodo } from "../../../app/slices/todoSlice";
import TodoModal from "../TodoModal";


const  AppContent = () => {
const alltodos = useSelector((state) => state.todo.todoList);
const todos = [...alltodos]
const filtedTodo = todos.sort((a, b) => new Date(a.time) - new Date(b.time));

  console.log({ filtedTodo });

  console.log(todos)

  return (
    <div className="content-wrapper">
      {todos && todos.length > 0 ? (
        filtedTodo.map((todo, index) => <TodoItem todo={todo} key={index} />)
      ) : (
        <p className="text-center">No Todos</p>
      )}
    </div>
  );
};

export default AppContent;

const TodoItem = ({
  todo,
}: {
  todo: { title: string; time: string; id: string };
}) => {
  const { title, time, id } = todo;
  const [completed, setCompleted] = useState(false);
const [openModal , setOpenModal] = useState(false)

  const dispatch = useDispatch();
 
  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteTodo(id));
  };
  const handleUpdate = () => {
    setOpenModal(true)
  }

  return (
    <>
      <div className="todo-item">
      <div className="date-wrapper">
        <div
          onClick={() => setCompleted(!completed)}
          className="cursor-pointer"
        >
          []
        </div>
        <div>
          <p
            className={` cursor-pointer ${
              completed ? "line-through text-gray-500" : ""
            }`}
          >
            {title}
          </p>
          <p>{time}</p>
        </div>
      </div>
      <div className="icon-container">
        <div className="icon-wrapper" onClick={() => handleDelete(id)}>
          <MdDelete fontSize={25} />
        </div>
        <div className="icon-wrapper" onClick={handleUpdate}>
          <MdModeEditOutline fontSize={25} />
        </div>
      </div>
    </div>
    <TodoModal openModal={openModal} todo={todo} type="Update" setOpenModal={setOpenModal}/>

    </>
  );
};
