import React, { FC, ReactNode, useState } from 'react'
import { FaShirt } from "react-icons/fa6"
import { FaPencilAlt } from "react-icons/fa"
import { FaBookOpen } from "react-icons/fa6"
import { FaCoffee } from "react-icons/fa"
import { IoFastFood } from "react-icons/io5"
import { FaGifts } from "react-icons/fa6"
import { MdElectricalServices } from "react-icons/md"
import ModalComponent from './ModalComponent'


 
type CircleType = {
  children?: ReactNode
  onClick?: () => void
}

const Circle: FC<CircleType> = ({
  children,
  onClick
}) => {
    return (
        <button className="bg-gray-100 border-gray-200 border rounded-full w-14 h-14 hover:opacity-50 focus:opacity-50 transition-opacity hover:cursor-pointer flex justify-center items-center" onClick={onClick}>
          {children}
        </button>
    )
}

const CircleList = () => {
  const [modalFlg, setModalFlg] = useState(false)

  const handleClick = () => {
    setModalFlg(!modalFlg)
  }
  return (
    <>
     <ModalComponent
      flg={modalFlg}
      onClick={handleClick}
     >
      test
     </ModalComponent>
     
    <ul className='flex overflow-x-auto mt-8 hidden-scrollbar'>
        <li className='ml-4'>
          <Circle onClick={handleClick}><FaShirt className='w-8 h-8'/></Circle>
          <p className="text-center text-xs mt-1">洋服</p>
        </li>
        <li className='ml-4'>
          <Circle onClick={handleClick}><FaPencilAlt className='w-8 h-8'/></Circle>
          <p className="text-center text-xs mt-1">雑貨</p>
        </li>
        <li className='ml-4'>
          <Circle onClick={handleClick}><FaBookOpen className='w-8 h-8'/></Circle>
          <p className="text-center text-xs mt-1">本</p>
        </li>
        <li className='ml-4'>
          <Circle onClick={handleClick}><FaCoffee className='w-8 h-8'/></Circle>
          <p className="text-center text-xs mt-1">カフェ</p>
        </li>
        <li className='ml-4'>
          <Circle onClick={handleClick}><IoFastFood className='w-8 h-8'/></Circle>
          <p className="text-center text-xs mt-1">食料品</p>
        </li>
        <li className='ml-4'>
          <Circle onClick={handleClick}><FaGifts className='w-8 h-8'/></Circle>
          <p className="text-center text-xs mt-1">ギフト</p>
        </li>
        <li className='ml-4 pr-4'>
          <Circle onClick={handleClick} ><MdElectricalServices className='w-8 h-8'/></Circle>
          <p className="text-center text-xs mt-1">家電</p>
        </li>
    </ul>
    </>
  )
}

export default CircleList