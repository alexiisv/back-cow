import React from 'react'

function Input ({
  id,
  label,
  type,
  placeholder,
  value,
  setValue,
  inputMode = 'text'
}) {
  return (
    <div className='w-full'>
      <label
        className='mb-1 block text-sm font-semibold'
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        className='bg-slate-50 py-1 px-2 border border-slate-300 text-sm rounded-lg hover:bg-slate-50 focus:bg-slate-50 focus:ring-slate-500 focus:border-slate-500 block w-full focus:outline-none transition duration-150 ease-in-out'
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        inputMode={inputMode}
      />
    </div>
  )
}

export default Input
