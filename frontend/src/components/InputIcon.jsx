function InputIcon ({
  value,
  setValue,
  label,
  placeholder,
  icon: Icon,
  type = 'text',
  inputMode = 'text'
}) {
  return (
    <div>
      <label
        className='mb-1 block text-sm font-semibold'
        htmlFor='identificacion'
      >
        {label}
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
          <Icon className='w-5 h-5 text-slate-500' />
        </div>
        <input
          className='bg-slate-50 border border-slate-300 text-sm rounded-lg hover:bg-slate-100 focus:bg-slate-100 focus:ring-slate-500 focus:border-slate-500 block w-full ps-10 p-2 focus:outline-none transition duration-150 ease-in-out'
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          inputMode={inputMode}
        />
      </div>
    </div>
  )
}

export default InputIcon
