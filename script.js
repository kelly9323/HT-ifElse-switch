//1st task
// const season = prompt("Enter present month's number:");
// switch (season) {
//   case "1":
//   case "2":
//   case "12":
//     console.log("winter");
//     break;

//   case "3":
//   case "4":
//   case "5":
//     console.log("spring");
//     break;

//   case "6":
//   case "7":
//   case "8":
//     console.log("summer");
//     break;

//   case "9":
//   case "10":
//   case "11":
//     console.log("fall");
//     break;
//   default:
//     console.log("404 error");
//     break;
// }

const season = prompt("Enter present month's number:");
if (season === "1" || season === "2" || season === "12") {
  console.log("winter");
} else if (season === "3" || season === "4" || season === "5") {
  console.log("spring");
} else if (season === "6" || season === "7" || season === "8") {
  console.log("summer");
} else if (season === "9" || season === "10" || season === "11") {
  console.log("fall");
} else {
  console.log("404 error");
}

//2nd task

const checkAgeStatus = prompt("Enter your age");

if (Number(checkAgeStatus) >= 0 && Number(checkAgeStatus) < 2) {
  console.log("baby");
} else if (Number(checkAgeStatus) >= 2 && Number(checkAgeStatus) < 6) {
  console.log("kinder");
} else if (Number(checkAgeStatus) >= 6 && Number(checkAgeStatus) < 12) {
  console.log("child");
} else if (Number(checkAgeStatus) >= 12 && Number(checkAgeStatus) < 18) {
  console.log("teenager");
} else if (Number(checkAgeStatus) >= 18 && Number(checkAgeStatus) < 65) {
  console.log("adult");
} else if (Number(checkAgeStatus) >= 65 && Number(checkAgeStatus) < 100) {
  console.log("oldmen");
} else if (Number(checkAgeStatus) >= 100 && Number(checkAgeStatus) < 150) {
  console.log("super!");
} else {
  console.log("404 try again");
}

//3rd task

// const insertHour = prompt("Enter hour, please");

// if (Number(insertHour) >= 7 && Number(insertHour) < 11) {
//   console.log("good moring");
// } else if (Number(insertHour) >= 11 && Number(insertHour) < 18) {
//   console.log("good day");
// } else if (Number(insertHour) >= 18 && Number(insertHour) < 23) {
//   console.log("good evening");
// } else if (
//   (Number(insertHour) >= 0 && Number(insertHour) < 7) ||
//   Number(insertHour) === 23 || Number(insertHour) === 00
// ) {
//   console.log("good night");
// } else {
//   console.log("404 try again");
// }

const insertHour = prompt("Enter hour, please");
switch (insertHour) {
  case "7":
    console.log("good morning");
    break;

  case "8":
    console.log("good morning");
    break;

  case "9":
    console.log("good morning");
    break;

  case "10":
    console.log("good morning");
    break;

  case "11":
    console.log("good day");
    break;

  case "12":
    console.log("good day");
    break;

  case "13":
    console.log("good day");
    break;

  case "14":
    console.log("good day");
    break;

  case "15":
    console.log("good day");
    break;

  case "16":
    console.log("good day");
    break;

  case "17":
    console.log("good day");
    break;

  case "18":
    console.log("good evening");
    break;

  case "19":
    console.log("good evening");
    break;

  case "20":
    console.log("good evening");
    break;

  case "21":
    console.log("good evening");
    break;

  case "22":
    console.log("good evening");
    break;

  case "23":
    console.log("good night");
    break;

  case "0":
  case "00":
    console.log("good night");
    break;

  case "1":
    console.log("good night");
    break;

  case "3":
    console.log("good night");
    break;

  case "4":
    console.log("good night");
    break;

  case "5":
    console.log("good night");
    break;

  case "6":
    console.log("good night");
    break;

  default:
    console.log("404 error");
    break;
}
