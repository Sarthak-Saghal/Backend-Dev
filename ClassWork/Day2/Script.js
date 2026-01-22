const user = {
  name: "Sarthak", email: "sarthak@gmail.com", phone: "6846",
  social: {
    fb: "https://facebook.com",
    instagram: "https://instagram.com"
  }
}
const { name, email, phone, social } = user;
const updateUser = { ...user, address: "Mathura" }
const user1 = user;
user1.name = "Mohan"
const { password, ...publicData } = user;
console.log("publicData", publicData);

console.log(user.name);

const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((number) => number * 2)
console.log(newNumbers)


const sumOfNumbers = numbers.reduce((sum, number) => {
  console.log(number);
  return sum + number;
}, 0);