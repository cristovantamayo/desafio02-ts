import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  const mockEmail = "admin@desafio02.com";

  it("Deve exibir um alert com boas vindas", async () => {
    await login(mockEmail, "admin");
    expect(mockAlert).toHaveBeenCalledWith("Bem vinda Admin!");
  });

  it("Deve exibir um alert pedindo credenciais válidas", async () => {
    await login(mockEmail, "admin123");
    expect(mockAlert).toHaveBeenCalledWith("Informe Credenciais válidas!");
  });
});
