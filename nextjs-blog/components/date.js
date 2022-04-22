import { parseIO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseIO(dateString)
  return <time datetime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
