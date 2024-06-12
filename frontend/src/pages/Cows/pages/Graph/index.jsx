import { useParams } from 'react-router-dom'
import LinesChart from './components/LinesChart'

function Graph () {
  const { id, property } = useParams()

  return (
    <div>
      {id} - {property}
      <LinesChart id={id} property={property} />
    </div>
  )
}

export default Graph
