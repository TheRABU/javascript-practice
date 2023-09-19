const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Samir";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "some@example.com",
  full_name: {
    userfullname: {
      firstname: "Fazle",
      lastname: "Rabbi",
    },
  },
};
// console.log(regularUser.full_name.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

//when user is from database

const users = [
  {
    id: 1,
    email: "hotmai@ga.com",
  },
  {
    id: 2,
    email: "hotmai@ga.com",
  },
  {
    id: 3,
    email: "hotmai@ga.com",
  },
];

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//now that we have taken it inside an array we can use loop further
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

//Object Destructure

const course = {
  coursename: "Learn Javascript",
  price: "999",
  courseInstructor: "Rehel",
};

// course.courseInstructor
//here we are telling from where the courseInstructor should be used which is from course.
const { courseInstructor: instructor } = course;
console.log(instructor);

//In REACT we can use the destructure like this in Objects:
//  const navbar = ({company}) => {

//  }
//  navbar (company= "keyframe")
