//Front End Code For Making The Endpoints Work (using fetch)

//  ***Admin Endpoints***  //

//endpoint : /admin/signup
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  name: "admin2",
  email: "admin2@pulzion.com",
  password: "macooladmin2",
});

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch("localhost:3000/admin/signup", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

//endpoint : /admin/login
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  email: "admin2@pulzion.com",
  password: "macooladmin2",
});

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch("localhost:3000/admin/login", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

//endpoint : /admin/logout
var requestOptions = {
  method: "POST",
  redirect: "follow",
};

fetch("localhost:3000/admin/logout", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

// DELETE endpoint : /admin
var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjlhZGM1NTVmMjBmYTNhNjQ5MmQ5ZDIiLCJpYXQiOjE2MDM5ODQ0Njl9.UIt4hicr4puiHDV7e9qyCK6tE2Mlqh6JNOGnTEq6QX0"
);

var requestOptions = {
  method: "DELETE",
  headers: myHeaders,
  redirect: "follow",
};

fetch("localhost:3000/admin", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
