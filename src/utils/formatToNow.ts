import * as dateFns from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const formatToNow = (date: string) =>
  dateFns.formatDistanceToNow(dateFns.parseISO(date), {
    locale: ptBR,
    addSuffix: true,
  })
