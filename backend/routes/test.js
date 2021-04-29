// let link = "https://consecration-abomination.s3-ap-southeast-2.amazonaws.com/346389-200.png"

// link = link.split("")

// link = link.reverse().join("").split('/')[0].split("").reverse().join("")

// console.log(link)

let location = "https://consecration-abomination.s3-ap-southeast-2.amazonaws.com/346389-200.png";

let key = location.substring(location.lastIndexOf("/") + 1, location.length);
// console.log(rest);
console.log(key);