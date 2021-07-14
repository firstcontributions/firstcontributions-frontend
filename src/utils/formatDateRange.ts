export const formatDateRange = (dateRange: string) => {
  const dateParts = dateRange.split('-')
  const startDate = new Date(
    parseInt(dateParts[2]),
    parseInt(dateParts[1]) - 1,
    parseInt(dateParts[0])
  )
  const endDate = new Date(
    parseInt(dateParts[5]),
    parseInt(dateParts[4]) - 1,
    parseInt(dateParts[3])
  )
  const dateFormatOptions = {
    month: 'short',
    day: 'numeric',
  }

  return `${startDate.toLocaleDateString(
    'en-US',
    dateFormatOptions
  )} - ${endDate.toLocaleDateString('en-US', dateFormatOptions)}`
}
