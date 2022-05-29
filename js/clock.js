let userName;

userName = prompt("Adınızı Giriniz:")

let myName = document.querySelector('#myName')

myName.innerHTML = userName

let date = new Date()

let time = date.getHours()

let min = date.getMinutes()

let sec = date.getSeconds()

let day = date.getDay()

let days= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

let clock = document.querySelector('#myClock')

clock.innerHTML = `${time}:${min}:${sec} ${days[day]} `