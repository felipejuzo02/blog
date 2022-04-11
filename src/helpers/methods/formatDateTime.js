import { date } from 'quasar'

export default function (mask = 'DD/MM/YYYY') {
  return new Date() ? date.formatDate(new Date(), mask) : ''
}
