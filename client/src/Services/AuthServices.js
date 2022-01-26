export default {
  login: (user) => {
    return fetch("http://localhost:4000/api/user/login", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401) {
        return res.json().then((data) => data);
      } else
        return {
          isAuthenticated: false,
          user: { username: "", email: "", contact: "" },
        };
    });
  },
  register: (user) => {
    return fetch("http://localhost:4000/api/user/register", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },
  logout: () => {
    return fetch("http://localhost:4000/api/user/logout").then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      else
        return {
          isAuthenticated: false,
          user: { username: "", email: "", contact: "" },
        };
    });
  },
  isAuthenticated: () => {
    return fetch("http://localhost:4000/api/user/authenticated").then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      else
        return {
          isAuthenticated: false,
          user: { username: "", email: "", contact: "" },
        };
    });
  },
  checkUser: (token) => {
    return fetch("http://localhost:4000/api/user/checkUser", {
      method: "post",
      body: JSON.stringify(token),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },
  validateUsername: (username) => {
    return fetch("http://localhost:4000/api/user/validateUsername", {
      method: "post",
      body: JSON.stringify(username),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },
};
