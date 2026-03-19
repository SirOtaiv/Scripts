export function gerarCNPJ(): string {
   const calcularDigito = (cnpj: number[], pesos: number[]): number => {
      const soma = cnpj.reduce((acc, n, i) => acc + n * pesos[i], 0);
      const resto = soma % 11;
      return resto < 2 ? 0 : 11 - resto;
   };

   const numeros: number[] = Array.from({ length: 12 }, () =>
      Math.floor(Math.random() * 10)
   );

   const pesos1: number[] = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
   const pesos2: number[] = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

   const d1 = calcularDigito(numeros, pesos1);
   const d2 = calcularDigito([...numeros, d1], pesos2);

   return [...numeros, d1, d2].join("");
}

export function formatarCNPJ(cnpj: string): string {
   return cnpj.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      "$1.$2.$3/$4-$5"
   );
}