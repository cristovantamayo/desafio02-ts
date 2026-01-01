import { api } from "../api";

export const login = async (email: string, password: string): Promise<void> => {
  const data = (await api) as { email: string; password: string };
  if (email === data.email && password === data.password) {
    alert("Bem vinda Admin!");
  } else {
    alert("Informe Credenciais válidas!");
  }
};
