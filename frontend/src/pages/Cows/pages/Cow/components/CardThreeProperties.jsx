import React from 'react'

function CardThreeProperties ({ name, value }) {
  return (
    <div className='bg-slate-300/30 rounded-lg overflow-hidden border border-slate-600/20 shadow-sm flex flex-col justify-between'>
      <div className='min-h-24 h-full p-4 flex items-end'>
        <div className='flex flex-col justify-end'>
          {Object.entries(value).map(([key, value]) => (
            <div key={key} className='flex justify-between items-end gap-1'>
              <p className='mb-0.5'>{key}:</p>
              <p className='text-lg font-semibold'>{value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='px-4 py-3 border-t border-slate-600/20'>
        <h5 className='font-semibold'>{name}</h5>
      </div>
    </div>
  )
}

export default CardThreeProperties
