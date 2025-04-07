export const calcularResultado = (
  num1: string,
  num2: string,
  operacao: string
): { resultado: number | null; erro: string } => {
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  if (isNaN(n1) || isNaN(n2)) {
    return { resultado: null, erro: "Digite números válidos!" };
  }

  switch (operacao) {
    case "somar":
      return { resultado: n1 + n2, erro: "" };
    case "subtrair":
      return { resultado: n1 - n2, erro: "" };
    case "multiplicar":
      return { resultado: n1 * n2, erro: "" };
    case "dividir":
      if (n2 === 0) return { resultado: null, erro: "Divisão por zero!" };
      return { resultado: n1 / n2, erro: "" };
    default:
      return { resultado: null, erro: "Operação inválida!" };
  }
};
