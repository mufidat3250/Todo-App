import './style.scss'
const Select = ({ options, value, name, otherClass , onChange}: { options: string[], otherClass:string, name:string, onChange:(e:React.ChangeEvent<HTMLSelectElement>)=> void, value: string}) => {
  return (
    <select className={`select-wrapper ${otherClass}`} onChange={onChange} value={value} name={name}>
      {options.map((option, index) => (
        <option className="" key={index}>
          {option}
        </option>
      ))}
    </select>
  );
};
export default Select;
