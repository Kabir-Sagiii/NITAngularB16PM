var employee = {
  id: 101,
  name: "Arun",
  email: "Arun@gmail.com",
  address: {
    city: "Mumbai",
    state: "MH",
    pincode: 456789,
  },
  getData: function () {
    console.log("Data is not available");
  },
};

// console.log(employee.address.state);

// employee.getData();

var company = {
  name: "NIT",

  Dept: [
    {
      name: "Sales",
      TM: 15,
    },
    {
      name: "Operation",
      TM: 10,
    },
    {
      name: "Accounts",
      TM: 5,
    },
  ],
};

console.log(company.Dept[2].TM);
