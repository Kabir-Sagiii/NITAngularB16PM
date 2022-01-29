var userInfo = {
  name: "NIT", //Naresh
  city: "Hyd",
  email: "NIT@gmail.com",
  phn: 9999999,
};

// console.log(userInfo);

//Accessing the property in Object
// console.log(userInfo.email);
// console.log(userInfo.city);

//Insert new Propert
userInfo.state = "TS";
userInfo.id = 101;

// console.log(userInfo);

//Update the property value
userInfo.name = "Naresh";
userInfo.city = "Delhi";

console.log(userInfo);

delete userInfo.id;
delete userInfo.name;
console.log(userInfo);
