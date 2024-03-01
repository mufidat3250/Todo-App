import {useState } from "react";
import Button from "../../Atoms/Buttons";
import TodoModal from "../TodoModal";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../../app/slices/todoSlice";

const AppHeader = () => {
  const [openModal, setOpenModal] = useState(false)
  const filteredStatus = useSelector((state)=> state.todo.filterStatus )
  const [filterStatus, setFilterStatus] = useState(filteredStatus)
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setFilterStatus(e.target.value)
    dispatch(updateFilter(e.target.value))
  }
  return (
   <>
     <div className="flex justify-between mb-2">
      <div className="w-[8rem]" onClick={() => setOpenModal(true)}>
        <Button title=" Add Task" otherClass={" bg-primary"} />
      </div>
       <div className="w-[8rem]">
          <select value={filterStatus} onChange={handleChange} className="outline-none w-full h-full bg-gray-200 px-3 cursor-pointer rounded-sm">
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
          </select>
        </div> 
     
    </div>
    <TodoModal openModal={openModal} type="Add" setOpenModal={setOpenModal} todo={{
        title: "",
        status: "",
        time: ""
      }}/>

   </>
  );
};

export default AppHeader;


