import { useEffect, useState } from "react";
import "./style.scss";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../../app/slices/todoSlice";
import { format } from "date-fns";
import toast from "react-hot-toast";
import Input from "../../Atoms/Input";
import Button from "../../Atoms/Buttons";
import Select from "../../Atoms/Select";
import { AnimatePresence, motion } from "framer-motion";

const TodoModal = ({
  openModal,
  setOpenModal,
  type= 'Add',
  todo
}: {
  type:string;
  todo: {title:string, status:string, time:string},
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [formInput, setFormInput] = useState({
    title: "",
    status: "Incomplete",
  });


useEffect(()=> {
  if(type === 'Update'){
    setFormInput({...formInput, title:todo.title, status: todo.status})
  }else {
    setFormInput({...formInput, title: '', status:'Incomplete'})
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [todo, type, setOpenModal])

  const dispatch = useDispatch();

  const generateId = () => {
    return Math.random().toString(16).slice(3, 6);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (formInput.title === '') {
      toast.error('Title must be provided')
      return;
    }
    if (formInput.title && formInput.status) {
      if(type === 'Add'){
        dispatch(
          addTodo({
            title: formInput.title,
            status: formInput.status,
            id: generateId(),
            time: format(new Date(), "p, MM/dd/yyyy"),
          })
        );
    toast.success("Todo Added successfully");
    setOpenModal(false)
        }if(type === 'Update'){
        if(todo.title !== formInput.title || todo.status !== formInput.status){
          dispatch(updateTodo({
            ...todo,
            title:formInput.title,
            status: formInput.status
          }))
        setOpenModal(false);

        }else{
          toast.error('No update made')
          setOpenModal(true)
        }
      }
    }  
    // setOpenModal(false);
  };

  const container = {
    initial: {
      opacity:0,
      trasform: 'scale(0.5)',
      y:0
    },
    animate: {
      opacity: 1,
      trasform: 'scale(1)',
      transition:{
        duration:0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500
      }
    },
    exit: {
    transform: 'scale(0.9)',
    opacity: 0,
    }
  }
  return (
      <AnimatePresence>
      {openModal && (
        <motion.div className="wrapper" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.3}}>
          <motion.div className="container  " variants={container} initial='initial' animate='animate'>
            <motion.div
              className="closeBtn"
              onClick={() => setOpenModal(false)}
              onKeyDown={() => setOpenModal(false)}
              tabIndex={1}
              initial={{y: 40, opacity: 0}}
              animate={{y: -60, opacity: 1}}
              exit={{y: 40, opacity:0}}
            >
              <MdOutlineClose />
            </motion.div>
            <div className="w-full">
              <form className="form" onSubmit={handleSubmit}>
                <h4 className="title">{type === 'Add'? 'Add' : 'Update'} Task</h4>
                <div className=" mt-4 flex flex-col gap-4">
                  <Input
                    label={"Title"}
                    value={formInput.title}
                    handleChange={handleChange}
                    name={"title"}
                  />
                  <Select
                    name={"status"}
                    value={formInput.status}
                    options={["Completed", "Incomplete"]}
                    otherClass="!bg-white !p-[12px]"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-8 flex gap-2">
                  <Button
                    title={`${type === 'Add' ? 'Add' : 'Update'} Task`}
                    otherClass="!w-[7rem] bg-primary !py-2 rounded-[4px]"
                    type="submit"
                  />
                  <Button
                    title="Cancel"
                    otherClass="!w-[7rem] bg-secondary !py-2 rouded-[4px] !text-black"
                  />
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
  );
};

export default TodoModal;

