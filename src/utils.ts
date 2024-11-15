export  const today = new Date().toISOString().split('T')[0].split('-').join('')
export  const formerDay=(dueDate:string)=>dueDate.split('-').reverse().join('')<today
export  const comingDay=(dueDate:string)=>dueDate.split('-').reverse().join('')>today