const deadLine = new Date (2022,10,16).getTime()

function countDown (){
const currentDate =new Date().getTime()
const remainingTime = deadLine -currentDate
    
const days = Math.floor(remainingTime/(24*60*60*1000))
const hours = Math.floor((remainingTime % (24*60*60*1000))/(60*60*1000))
const minutes = Math.floor((remainingTime % (60*60*1000))/(60*1000))
const sec = Math.floor((remainingTime % (60*1000))/1000)
// document.getElementById("timer").innerHTML = days + "Days " +hours + "Hours " +minutes + "Mins " +sec + "Sec " 
document.getElementById("days").innerHTML =formatTime (days)
document.getElementById("hours").innerHTML =formatTime (hours)
document.getElementById("minutes").innerHTML =formatTime (minutes)
document.getElementById("seconds").innerHTML =formatTime (sec)

console.log(remainingTime)
console.log(days,hours,minutes,sec)
function formatTime(time){
    if (time <10){
        return `0${time}`
    }
 else return time
}
if (remainingTime ==0){
    clearInterval(countDown)
    document.getElementById("timer").innerHTML = "EXPIRED"
}

}
countDown ()
setInterval(countDown ,1000)