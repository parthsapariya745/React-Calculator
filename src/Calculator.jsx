import { useState } from "react"

const Calculator = () => {
    let calValue = ['√', ' ÷ ', '7', '8', '9', ' x ', '4', '5', '6', ' - ', '1', '2', '3', ' + ', '0', '00', '000', ' % ', '.']
    let [flag, setFlag] = useState(false)
    let [number, setNumber] = useState('0')

    let handleOnAndOff = () => {
        flag ? setFlag(false) : setFlag(true)
    }
    let handleDisplay = (e) => {
        if (flag) setNumber(oldValue => (oldValue === '0' ? e : oldValue + e))
    }
    let handleAC = () => {
        setNumber('0')
    }
    let handleCE = () => {
        setNumber(deleteNumber => deleteNumber.trim().slice(0, -1) || '0')
    }
    let handleAnswer = () => {
        let operation = number.replace(/x/g, '*').replace(/÷/g, '/')
        let result = eval(operation)
        setNumber(result.toString())
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 font-sans">
            <div className="w-87 bg-gray-800 rounded-xl p-6 shadow-2xl shadow-black/40 transform transition-all duration-500 hover:scale-[1.01]">
                <div className="heading mt-2 mb-3 flex justify-between items-center text-[#3A48A0]">
                    <img src='./src/assets/casio-logo.png' width={115} alt="" />
                    <button onClick={handleOnAndOff} className="relative inline-flex items-center rounded-full cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95">
                        {flag ?
                            <i className="fa-solid fa-toggle-on text-[40px] transition-transform duration-500 hover:rotate-12 animate-pulse"></i> :
                            <i className="fa-solid fa-toggle-off text-[40px] transition-transform duration-500 hover:-rotate-12"></i>}
                    </button>
                </div>
                <div className="bg-gray-700 h-20 rounded-lg mb-4 flex justify-end items-end p-4 text-white text-3xl font-light overflow-hidden transition-all duration-300 shadow-inner shadow-black/30">{flag ? number : ''}</div>
                <div className="grid grid-cols-4 gap-2">
                    <button onClick={handleAC} className="relative overflow-hidden bg-red-600 hover:bg-red-500 w-full p-4 text-white rounded-lg text-2xl cursor-pointer duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 active:scale-95 before:content-[''] before:absolute before:inset-0 before:bg-white/30 before:rounded-full before:scale-0 hover:before:scale-150 before:opacity-0 hover:before:opacity-10 before:transition-all before:duration-500">AC</button>
                    <button onClick={handleCE} className="relative overflow-hidden bg-yellow-500 hover:bg-yellow-400 w-full p-4 text-white rounded-lg text-2xl cursor-pointer duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 active:scale-95 before:content-[''] before:absolute before:inset-0 before:bg-white/30 before:rounded-full before:scale-0 hover:before:scale-150 before:opacity-0 hover:before:opacity-10 before:transition-all before:duration-500">CE</button>
                    {calValue.map((e, i) => {
                        return (
                            <div key={i} className="relative">
                                <button onClick={() => handleDisplay(e)}
                                    className={`${e.trim() === '%' || e.trim() === '÷' || e.trim() === 'x' || e.trim() === '-' || e.trim() === '+' || e.trim() === '√'
                                        ? "bg-blue-500 hover:bg-blue-400"
                                        : "bg-gray-600 hover:bg-gray-500"
                                        } relative overflow-hidden w-full p-4 text-white rounded-lg text-2xl cursor-pointer duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 active:scale-95 before:content-[''] before:absolute before:inset-0 before:bg-white/30 before:rounded-full before:scale-0 hover:before:scale-150 before:opacity-0 hover:before:opacity-10 before:transition-all before:duration-500`}>
                                    {e}
                                </button>
                            </div>
                        )
                    })}
                    <button onClick={handleAnswer} className="relative overflow-hidden bg-green-600 hover:bg-green-500 w-full p-4 text-white rounded-lg text-2xl cursor-pointer duration-300 col-span-3 shadow-md hover:shadow-xl transform hover:-translate-y-1 active:scale-95 before:content-[''] before:absolute before:inset-0 before:bg-white/30 before:rounded-full before:scale-0 hover:before:scale-150 before:opacity-0 hover:before:opacity-10 before:transition-all before:duration-500"
                    >=</button>
                </div>
            </div>
        </div>
    )
}
export default Calculator