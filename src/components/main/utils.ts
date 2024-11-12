export const dateToString=(date:Date)=>{
  return  date
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join("-");
}
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


export const dateToDay=(date:Date)=>{
 return daysOfWeek[date.getDay()]
}