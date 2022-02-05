class Student {
  name = "NIT";
  city = "HYD";

  getDetails() {
    console.log(this.name);
    console.log(this.city);
  }
}

var s1 = new Student();
// s1.getDetails();
s1.name = "Naresh";
// s1.getDetails();

var s2 = new Student();
s2.name = "Kabir";
s2.city = "Delhi";
s2.getDetails();
s1.getDetails();
