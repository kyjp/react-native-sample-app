import React, { FC, ReactNode } from 'react'
import { IoIosClose } from "react-icons/io"

type ModalComponentType = {
    children: ReactNode
    flg: boolean
    onClick: () => void
  }
  
  const ModalComponent: FC<ModalComponentType> = ({
    children,
    flg,
    onClick
  }) => {
    return (
      <div className={`${!flg ? 'hidden' : 'w-full h-full fixed top-0 left-0 block z-10'}`}>
        <div className='relative w-full h-full flex justify-center items-center'>
          <button className="bg-black/70 w-full h-full absolute top-0 left-0 hover:cursor-pointer" onClick={onClick}></button>
          <div className="max-w-[80%] max-h-[80%] p-4 relative bg-white rounded p-8">
            <button className="absolute right-0 top-0" onClick={onClick}><IoIosClose className='w-6 h-6'/></button>
            {children}
          </div>
        </div>
      </div>
    )
  }

  export default ModalComponent