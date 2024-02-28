
import { ReactNode } from 'react'
import './style.scss'
import { MdOutlineClose } from 'react-icons/md'

const TodoModal = ({children, openModal, setOpenModal }:{children:ReactNode; openModal:boolean; setOpenModal:React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <>
    {openModal && <div className='wrapper'>
      <div className='container'>
        <div className='closeBtn' onClick={()=>setOpenModal(false)} onKeyDown={()=> setOpenModal(false)} tabIndex={1}>
            <MdOutlineClose/>
        </div>
        <div className='w-full'>
        {children}
        </div>
      </div>
    </div>}
    </>
  )
}

export default TodoModal
