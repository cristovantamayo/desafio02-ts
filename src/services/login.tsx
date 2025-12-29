export const login = (email: string, password: string): void => {
  if (email === "admin@desafio02.com" && password === "admin") {
    alert("Bem vinda Admin!");
  } else {
    alert("Informe Credenciais válidas");
  }
};
