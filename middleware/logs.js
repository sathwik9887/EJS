function user(req, res, next) {
  console.log("username: (alex)");
  console.log("password: (alex123)");
  console.log("email: (alex@gmail.com)");
  console.log("age: (19)");
  next();
}
export default user;
