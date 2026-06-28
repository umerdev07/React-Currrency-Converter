import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const Swap = () => {
    setFrom(to),
      setTo(from),
      setConvertedAmount(amount),
      setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-40"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/26743048/pexels-photo-26743048.jpeg')",
      }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 p-10'>
          <form onSubmit={(e) => {
            e.preventDefault();
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            <div className='relative w-full h-0.5'>
              <button onClick={Swap} type='button' className="absolute left-1/2
                -translate-x-1/2
                -translate-y-1/2 border-2
               border-white rounded-lg
               bg-blue-600 text-white
                 px-2 py-0.5">
                Swap
              </button>
            </div>

            <div className='w-full mt-1 mb-4'>
              <InputBox label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
                onAmountChange={(amount) => setAmount(amount)}

              />
            </div>

            <button className='w-full bg-full-600 text-white px-4 py-3 rounded-lg bg-blue-600'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>

          </form>
        </div>

      </div>
    </div>
  )
}

export default App
