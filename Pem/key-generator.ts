import { generateKeyPairSync } from 'node:crypto';
import { writeFileSync } from 'node:fs';

// Gerando o par de chaves RSA
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',    // Formato padrão para chave pública
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',   // EXATAMENTE o que o jose.importPKCS8 espera
    format: 'pem',
  },
});

// Salva em arquivos para você não perder
writeFileSync('private.pem', privateKey);
writeFileSync('public.pem', publicKey);

console.log('✅ Chaves geradas com sucesso!');