import { useState } from "react";
import Button from "../../Atoms/Buttons";
import Select from "../../Atoms/Select";

const AppHeader = ({
  setOpenModal,
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [selected, setSelected] = useState("Incomplete");
  return (
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
  );
};

export default AppHeader;
