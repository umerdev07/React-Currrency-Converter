import React, { useId } from 'react'

function InputBox(
    {
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOption = [],
        selectCurrency = "usd",
        amountDisable = false,
        currencyDisable = false,
        className = "",
    }
) {

    const amountInputId = useId();
    return (
      <div className={`bg-white p-3 rounded-lg text-sm flex justify-between items-start ${className}`}>
  {/* Left Side */}
  <div className="w-2/3 pr-4">
    <label
      htmlFor={amountInputId}
      className="text-black/40 mb-2 block"
    >
      {label}
    </label>

    <input
      id={amountInputId}
      type="number"
      className="w-full outline-none bg-transparent py-1.5"
      placeholder="Amount"
      value={amount}
      disabled={amountDisable}
      onChange={(e) =>
        onAmountChange && onAmountChange(Number(e.target.value))
      }
    />
  </div>

  {/* Right Side */}
  <div className="w-1/3">
    <label className="text-black/40 mb-2 block">
      Currency Type
    </label>

    <select
      className="w-full rounded-lg px-2 py-1 bg-gray-100 outline-none"
      value={selectCurrency}
      onChange={(e) =>
        onCurrencyChange && onCurrencyChange(e.target.value)
      }
      disabled={currencyDisable}
    >
      {currencyOption.map((currency) => (
        <option key={currency} value={currency}>
          {currency.toUpperCase()}
        </option>
      ))}
    </select>
  </div>
</div>
    )
}

export default InputBox
