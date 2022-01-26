export default {
  create: (req) => {
    return fetch("http://localhost:4000/api/rentals/create", {
      method: "post",
      body: JSON.stringify(req),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },
};
