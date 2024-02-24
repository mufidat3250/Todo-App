import { ReactNode,} from 'react'
import './style.scss'
import { MdOutlineClose } from 'react-icons/md'
const TodoModal = ({children}:{children:JSX.Element}) => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='closeBtn'>
            <MdOutlineClose/>
        </div>
        {children}
      </div>
    </div>
  )
}

export default TodoModal
