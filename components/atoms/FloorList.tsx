import React, { useState } from 'react'
import ModalComponent from './ModalComponent'

const FloorList = () => {
  const [modalFlg, setModalFlg] = useState(false)

  const handleClick = () => {
    setModalFlg(!modalFlg)
  }
  return (
    <section className='mt-8 py-4 bg-gray-100'>
      <ModalComponent
      flg={modalFlg}
      onClick={handleClick}
      >
      test
      </ModalComponent>
      <h2 className=' text-xl font-bold px-6'>フロア一覧</h2>
      <div className="w-full overflow-x-auto hidden-scrollbar mt-2">      
        <ul className="flex -ml-4 px-6 box-border">
            {
                [...Array(14)].map((_, index) => <li key={index} className={`ml-4${index === 13 ? ' pr-6': ''}`}>
                  <button className="border border-gray-200 rounded p-4 w-20 bg-white hover:opacity-60 focus:opacity-60 transition-opacity" onClick={handleClick}>{index + 1}F</button>
                </li>)
            }
        </ul>
      </div>
    </section>
  )
}

export default FloorList