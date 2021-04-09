import { getYear } from 'date-fns'

export const checkDateParam = (value: string) => {

  const currentYear = getYear(new Date());

  let arr = value.replace(/\D/g, "").split('')

  const year = arr.splice(4, 4).toString().replace(/\D/g, '')
  const month = arr.splice(2, 2).toString().replace(/\D/g, '')
  const day = arr.toString().replace(/\D/g, '')
  
  if (Number(year) > currentYear ) {
    throw new Error(`Data inválida. Escolha uma data entre 16/06/1995 e hoje`)
  
  } else if (Number(month) > 12) {
    throw new Error(`Data inválida. Escolha uma data entre 16/06/1995 e hoje`)
  
  } else if (Number(month) !== 2 && Number(day) > 29 ) {
    throw new Error(`Data inválida. Escolha uma data entre 16/06/1995 e hoje`)

  } else if (Number(day) > 31) {
    throw new Error(`Data inválida. Escolha uma data entre 16/06/1995 e hoje`)

  }
  
  return [year, month, day].join('-');
}

export const MaskDateInput = (value: string) => {
  value = value.replace(/\D/g, "")

  if (value.length > 8) {
    value = value.slice(0, -1)
  }
  
  value = value.replace(/(\d{4})(\d)/, "$1/$2")

  value = value.replace(/(\d{2})(\d)/, "$1/$2")

  return value;
}

export const reverDate = (value: string) => {
  let arr = value.replace(/\D/g, "").split('')

  const year = arr.splice(0, 4).toString().replace(/\D/g, '')
  const month = arr.splice(0, 2).toString().replace(/\D/g, '')
  const day = arr.toString().replace(/\D/g, '')

  return [day, month, year].join('/');
}