import "./style.scss";
import TodoItem from "../TodoItem";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

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


  const container = {
    initial: {
      opacity: 0,
      scale:0.5,
      y:20,
    },
    animate: {
      opacity:1,
      scale:1,
      y:0,
      transition: {
        staggerChildren: 0.2,
      },
  
    },
  } 
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
      stagger: 0.6
    },
    
  } 

  return (
    <motion.div className="content-wrapper" variants={container} initial='initial' animate='animate' transition={{duration:0.5}}>
      {filtedTodo && filtedTodo.length > 0 ? (
        filtedTodo.map((todo, index) => 
        <AnimatePresence>
          <TodoItem todo={todo} key={index} />
        </AnimatePresence>
        )
      ) : (
        <motion.div className="flex justify-center items-center" variants={child} transition={{duration:0.8}}>
          <p className="text-center bg-gray-200 py-2 rounded-md px-8 w-fit">No Todos</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AppContent;


