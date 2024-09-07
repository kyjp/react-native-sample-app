import React, { useEffect, useState } from 'react'

const StartLoading = () => {
    const [flg, setFlg] = useState(true)
    useEffect(() => {
        const loadingFn = async () => {
            await setTimeout(() => {}, 3000)
            setFlg(false)
        }
        loadingFn()
    }, [])
  return (
    <div className={`z-50 fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center transition-opacity duration-1000${flg ? " opacity-100" : " opacity-0 pointer-events-none"}`}>
        Title
    </div>
  )
}

export default StartLoading