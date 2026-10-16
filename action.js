
// Date :- Date is a javascript module which is used to work  with date and time.

// let date =new Date()
// console.log(date)
// console.log.getFullYear()
// console.log(date.getMonth()+1)
// console.log(date.getDay)



let year=document.getElementById("year")
year.innerHTML=date.getFullYear()

let month=["January","February","March","April","May","June","July","August","September","October","November","December"]
document.getElementById('month').innerHTML=month[date.getMonth()]
let day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
document.getElementById("day").innerHTML=day[date.getDay()]
document.getElementById("date").innerHTML=date.getDate()

