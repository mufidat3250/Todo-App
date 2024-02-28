import { useState } from "react";
import Button from "../../Atoms/Buttons";
import Select from "../../Atoms/Select";
import TodoModal from "../TodoModal";

const AppHeader = () => {
  const [selected, setSelected] = useState("Incomplete");
  const [openModal, setOpenModal] = useState(false)

  return (
   <>
     <div className="flex justify-between mb-2">
      <div className="w-[8rem]" onClick={() => setOpenModal(true)}>
        <Button title=" Add Task" otherClass={" bg-primary"} />
      </div>
      <div className="w-[8rem]">
        <Select
          options={["All", "Incomplete", "Complete"]}
          otherClass={""}
          name={""}
          onChange={(e) => setSelected(e.target.value)}
          value={selected}
        />
      </div>
    </div>
    <TodoModal openModal={openModal} type="Add" setOpenModal={setOpenModal}/>

   </>
  );
};

export default AppHeader;
