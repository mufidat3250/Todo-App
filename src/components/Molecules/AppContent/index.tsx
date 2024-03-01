import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import {
  deleteTodo,
  updateTodo,
} from "../../../app/slices/todoSlice";
import TodoModal from "../TodoModal";
import CheckButton from "../../Atoms/CheckBox";

const AppContent = () => {
  const alltodos = useSelector((state) => state.todo.todoList);
  const todos = [...alltodos];
  const filtedStatus = useSelector((state) => state.todo.filterStatus);
  const sortedTodo = todos.sort((a, b) => new Date(a.time) - new Date(b.time));

  const filtedTodo = sortedTodo.filter((todo) => {
    if (filtedStatus === "All") return todo;
    if (filtedStatus === 'Completed') return todo.status === 'Completed'
    return todo.status === 'Incomplete'
  });

  return (
    <div className="content-wrapper">
      {filtedTodo && filtedTodo.length > 0 ? (
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
  const [checked, setChecked] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const isChecked = useSelector((state) => state.todo.isChecked);
  console.log(isChecked);

  const dispatch = useDispatch();

  console.log({ todo });

  useEffect(() => {
    if (todo.status === "Completed") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleDelete = (id:string) => {
    dispatch(deleteTodo(id));
  };
  const handleUpdate = () => {
    setOpenModal(true);
  };
  const handleChecked = () => {
    setChecked((checked) => !checked);
    dispatch(
      updateTodo({
        ...todo,
        status: checked ? "Incomplete" : "Completed",
      })
    );
  };

  return (
    <>
      <div className="todo-item">
        <div className="date-wrapper">
          <div className="cursor-pointer">
            <CheckButton checked={checked} handleChecked={handleChecked} />
          </div>
          <div className="lin leading-6">
            <p
              className={` cursor-pointer ${
                checked ? "line-through text-gray-500" : ""
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
      <TodoModal
        openModal={openModal}
        todo={todo}
        type="Update"
        setOpenModal={setOpenModal}
      />
    </>
  );
};
