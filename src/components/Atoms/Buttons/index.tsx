import './button.scss'

const Button = ({title, otherClass}:{title:string, otherClass:string}) => {
  return (
    <button className={`btn-wrapper1 ${otherClass}`}>
        {title}
    </button>
  )
}

export default Button
