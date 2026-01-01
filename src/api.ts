const conta = {
  email: "admin@desafio02.com",
  password: "admin",
  name: "Admin",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
