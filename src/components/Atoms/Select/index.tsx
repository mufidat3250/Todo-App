import './style.scss'
const Select = ({ options }: { options: string[] }) => {
  return (
    <select className="select-wrapper">
      {options.map((option, index) => (
        <option className="" key={index}>
          {option}
        </option>
      ))}
    </select>
  );
};
export default Select;
