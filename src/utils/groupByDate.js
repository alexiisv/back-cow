import _ from 'lodash'

export const groupByDate = (collars) => {
  const sortedCollars = _.sortBy(collars, collar => new Date(collar.received_at))

  const firstDate = new Date(sortedCollars[0].received_at)
  const lastDate = new Date(sortedCollars[sortedCollars.length - 1].received_at)
  const rangeInMs = lastDate - firstDate
  const groupSizeInMs = rangeInMs / 30

  const groupedByDateRange = _.groupBy(sortedCollars, collar => {
    const collarDate = new Date(collar.received_at)
    const groupIndex = Math.floor((collarDate - firstDate) / groupSizeInMs)
    return groupIndex
  })

  return groupedByDateRange
}
