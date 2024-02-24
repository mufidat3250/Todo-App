import Button from "../../Atoms/Buttons";
import Select from "../../Atoms/Select";

const AppHeader = () => {
  return (
    <div className="flex justify-between mb-2">
      <div className="w-[8rem]">
        <Button title="Click me" otherClass={""} />
      </div>
      <div className="w-[8rem]">
        <Select options={["All", "Incomplete", "Complete"]} />
      </div>
    </div>
  );
};

export default AppHeader;
