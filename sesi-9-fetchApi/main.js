const endPoint = "https://reqres.in/api/users";

// dengan fetch
// fetch(endPoint)
//   .then((data) => data.json())
//   .then((result) => console.log(result));

// dengan async await
// async function hitAPI() {
//   const api = await fetch(endPoint);
//   const { data } = await api.json();//jika ditambahkan {}, akan mengembalikan object langsung
//   console.log(data);
// }
// hitAPI();

fetch(endPoint, {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    email: "pY9U3@example.com",
    firstName: "John",
  }),
})
  .then((result) => result.json())
  .then((data) => console.log(data));
