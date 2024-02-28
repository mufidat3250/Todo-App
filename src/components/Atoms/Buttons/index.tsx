import './button.scss'

const Button = ({title, otherClass, type}:{title:string, type?:string, otherClass:string}) => {
  return (
    <button className={`btn-wrapper1 ${otherClass}`} type={type? 'submit': 'button'}>
        {title}
    </button>
  )
}

export default Button
