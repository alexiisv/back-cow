import { Link } from 'react-router-dom'

function CardOneProperty ({ name, value }) {
  return (
    <Link to={`${name}`}>
      <div className='bg-slate-300/30 h-full rounded-lg overflow-hidden border border-slate-600/20 shadow-sm flex flex-col justify-between'>
        <div className='min-h-24 h-full p-4 flex items-end'>
          <p className='text-3xl'>{value}</p>
        </div>
        <div className='px-4 py-3 border-t border-slate-600/20'>
          <h5 className='font-semibold'>{name}</h5>
        </div>
      </div>
    </Link>
  )
}

export default CardOneProperty
