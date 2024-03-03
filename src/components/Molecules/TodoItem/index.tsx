import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../../app/slices/todoSlice";
import CheckButton from "../../Atoms/CheckBox";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import TodoModal from "../TodoModal";
import { motion } from "framer-motion";

const TodoItem = ({
    todo,
  }: {
    todo: {
        status: string; title: string; time: string; id: string 
};
  }) => {
    const { title, time, id } = todo;
    const [checked, setChecked] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    
    const dispatch = useDispatch();
    
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


    const child = {
        initial: {
          opacity: 0,
          scale:0.5,
          y:20,
        },
        animate: {
          opacity:1,
          scale:1,
          y:0,
        },
        
      } 
  
    return (
      <>
        <motion.div className="todo-item" variants={child}>
          <div className="date-wrapper">
            <div className="cursor-pointer">
              <CheckButton checked={checked} handleChecked={handleChecked} />
            </div>
            <div className="lin leading-6">
              <p
                className={` cursor-pointer leading-4 text-sm md:text-base ${
                  checked ? "line-through text-gray-500" : ""
                }`}
              >
                {title}
              </p>
              <p className=" font-bold text-xs md:text-sm m-0 p-0">{time}</p>
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
        </motion.div>
        <TodoModal
          openModal={openModal}
          todo={todo}
          type="Update"
          setOpenModal={setOpenModal}
        />
      </>
    );
  };

  export default TodoItem