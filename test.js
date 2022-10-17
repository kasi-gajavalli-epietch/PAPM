now = Date.now();
console.log(now);


checkin = Date.parse("10 oct 2022");
checkout = Date.parse("12 oct 2022");

console.log(checkin);
console.log(checkout);

if (now > checkin && now < checkout) {
  console.log("true");
} else {
  console.log("false");
}
