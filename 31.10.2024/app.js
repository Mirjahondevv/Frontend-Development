// const display = document.querySelector(".display")

// for(let i = 1; i <= 100; i++){
//   const box = document.createElement("div")
//   box.className = "box"
//   box.innerText = i
//   display.appendChild(box)
// }

// ===============================

// const num =document.getElementById("num")

// const btn = document.querySelector(".btn")

// const list = document.getElementById("list")

// btn.onclick = () =>{
//   const userNumber = num.value;
//   list.innerText = ""

//   for(let i = 1; i <= 10; i ++){
//     const li = document.createElement("li")
//     li.innerText=`${i} * ${userNumber} = ${i * userNumber}`
    
//     // console.log(`${i} * ${userNumber} = ${i * userNumber}`);
//     list.appendChild(li)
//   }

// }


// ===============================================================

// const images = [
//   "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
//   "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
//   "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
//   "https://images.unsplash.com/photo-1481349518771-20055b2a7b24",
//   "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
//   "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
//   "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd",
// ];


// const gallery = document.querySelector(".gallery")

// for(let i = 0; i < images.length; i++){
//   const img = document.createElement('img')
//   img.src = images[i]
//   gallery.appendChild(img)
// }

// ===================================================================

// let num = 1234

// function add (){
// let abc = 123
//   return abc
// }

// const result = add(5,5)

// console.log(add());

// =============================================================


// let b = 2.001

// console.log(b);

// let roundB = Math.round(b) // ↔
// let ceilB = Math.ceil(b) // ⬆
// let floorB = Math.floor(b)  // ⬇

// console.log(floorB);

// let a = Math.random() * 10// 0 => 1
// let b = Math.round(Math.random() * 10)

const num = document.getElementById("num")
const btn = document.querySelector('.btn')

const res = document.getElementById('res')

btn.onclick = getUserNumber



function getUserNumber() {
  const userNum = num.value 

  if (userNum == b) {
    res.innerText = "Win"
  } else if (userNum > b){
    res.innerText = "Siz kiritgan son kottaroq"
  } else if (userNum < b){
    res.innerText = "Siz kiritgan son kichik"
  }
}

const a = Math.pow(4, 3)

const b = Math.sqrt(5)

console.log(a);
console.log(b);

const x = Math.max(2, 4, 5, 6, 2, 3, 5)

console.log(x);









