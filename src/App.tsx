import {useState } from "react";
import "./App.scss";
import Input from "./components/Atoms/Input";
import AppContent from "./components/Molecules/AppContent";
import AppHeader from "./components/Molecules/AppHeader";
import TodoModal from "./components/Molecules/TodoModal";
import './components/Molecules/TodoModal/style.scss'
import Select from "./components/Atoms/Select";
import Button from "./components/Atoms/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./app/slices/todoSlice";
import {format}  from 'date-fns'
import toast, { Toaster } from "react-hot-toast";

function App() {

  const [formInput, setFormInput] = useState({title:'', status:'Incomplete'})
  const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()

    const generateId = () => {
      return Math.random().toString(16).slice(3,6)
    }
    
    const todoList = useSelector((state)=> state.todo.todoList)
    console.log(todoList)
  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=> {
    const {name, value} = e.target
      setFormInput({...formInput, [name]:value})
  }
  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    if(!formInput.title){
      console.log('Title must be provided')
      return
    }
    if(formInput.title && formInput.status){
      dispatch(addTodo({
        title:formInput.title,
        status: formInput.status, 
        id: generateId(),
        time: format(new Date(), 'p, MM/dd/yyyy')
  
      }))
    }

   
    console.log('submitted')
    toast.success('Todo Added successfully')
    // setFormInput({...formInput, title:''})
    setOpenModal(false)
  }


  return (
    <>
      <div className="app">
      <h1>TODO LIST</h1>
      <div className="main">
        <AppHeader setOpenModal={setOpenModal}/>
        <AppContent/>
          <TodoModal openModal={openModal}  setOpenModal={setOpenModal}>
          <form className="form" onSubmit={handleSubmit}>
            <h4 className="title">Add Task</h4>
            <div className=" mt-4 flex flex-col gap-4">
              <Input label={"Title"} value={formInput.title} handleChange={handleChange} name={'title'}/>
              <Select name={'status'} value={formInput.status} options={['Completed', 'Incomplete']} otherClass="!bg-white !p-[12px]" onChange={handleChange}/>
            </div>
            <div className="mt-8 flex gap-2">
              <Button title= 'Add Task' otherClass="!w-[7rem] bg-primary !py-2 rounded-[4px]" type="submit"/>
              <Button title= 'Cancel' otherClass="!w-[7rem] bg-secondary !py-2 rouded-[4px] !text-black"/>
              </div>
            </form>
          </TodoModal>
      </div>
    </div>
    <Toaster toastOptions={{
      className:'text-2xl'
    }}/>
    </>
  );
}

export default App;
