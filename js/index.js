// 1-Musbat yoki manfiy sonni aniqlash
let son = +prompt("sonni kiriting");
if (son > 0) {
  console.log("musbat");
} else {
  console.log("manfiy");
}

// 2.Sonning juft yoki toq ekanligini aniqlash
let num = +prompt("Sonni kiriting");
if (num % 2 == 0) {
  console.log("juft");
} else {
  console.log("Toq");
}

// 3. Ikki sonni taqqoslash
let son1 = +prompt("Sonni kiriting");
let son2 = +prompt("Sonni kiriting");
if (son1 > son2) {
  console.log("Katta");
} else if (son1 == son2) {
  console.log("Teng");
} else if (son1 < son2) {
  console.log("Kichik");
}

// 4.To'rtburchakning kvadrat ekanligini aniqlash
let length = +prompt("Uzunlikni kiriting");
let width = +prompt("Enini kiriting");
if (length == width) {
  console.log("Kvadrat");
} else {
  console.log("Kvadrat emas");
}

// 5.Haroratni baholash
let harorat = +prompt("Haroratni kiriting");
if (harorat > 0) {
  console.log("Yozgi");
} else if (harorat < 0) {
  console.log("Qishki");
}

// 6. **Baho chiqarish
let grade = +prompt("Bahoni kiriting");
if (grade == 5) {
  console.log("A'lo");
} else if (grade == 4) {
  console.log("Yaxshi");
} else if (grade == 3) {
  console.log("Qoniqarli");
} else if (grade == 2) {
  console.log("Yomon");
}
// 7. **Maksimal sonni aniqlash
function findMax() {
  let a = parseFloat(prompt("Birinchi sonni kiriting:"));
  let b = parseFloat(prompt("Ikkinchi sonni kiriting:"));
  let c = parseFloat(prompt("Uchinchi sonni kiriting:"));

  let max = Math.max(a, b, c);

  alert("Eng katta son: " + max);
}

findMax();

//   8. **Besh xonali sonmi yoki yo'q
function beshXonaliSonmi() {
  const son = +prompt("Son kiriting:");

  if (son.length === 5) {
    console.log("Besh xonali");
  } else {
    console.log("Besh xonali emas");
  }
}

beshXonaliSonmi();

// 11. **Foydalanuvchining yoshlik holatini aniqlash
let year = +prompt("Yoshingizni kiriting");
if (year > 2005) {
  console.log("Yosh bola");
} else if (year < 2005) {
  console.log("Katta odam");
}

// 15. **Tekin kirish
let age = +prompt("Yoshingizni kiriting");
if (age < 18) {
  console.log("Tekin kirish");
} else {
  console.log("Pul to'lash kerak");
}
