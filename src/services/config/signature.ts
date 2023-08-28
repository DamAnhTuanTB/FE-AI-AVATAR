import forge from 'node-forge';
import WasmLoader from '../wasmLoader/wasm.service';

export const encrypt = (plainText: string, key: string) => {
  const publicKey = forge.pki.publicKeyFromPem(key);

  return forge.util.encode64(
    publicKey.encrypt(forge.util.encodeUtf8(plainText), 'RSAES-PKCS1-V1_5', {
      md: forge.md.sha256.create(),
    })
  );
};

export const decrypt = (cipherText: string, key: string) => {
  const privateKey = forge.pki.privateKeyFromPem(key);

  return forge.util.decodeUtf8(
    privateKey.decrypt(forge.util.decode64(cipherText), 'RSAES-PKCS1-V1_5', {
      md: forge.md.sha256.create(),
    })
  );
};

const payloadWrapped = (timestamp: number, keyId: string) => {
  return `${timestamp}@@@${keyId}`;
};

export const signatureHeaders = async () => {
  const keyId = process.env.REACT_APP_KEY_ID || '';
  const timestamp = new Date().valueOf();
  const plainSignature = payloadWrapped(timestamp, keyId);
  const appName = process.env.REACT_APP_APP_NAME || '';
  const wasmLoader = new WasmLoader();
  let encrypted = '';
  await wasmLoader.init();
  if (wasmLoader.wasm) {
    const publicKey = wasmLoader.getPublicKey();
    encrypted = encrypt(plainSignature, publicKey);
  }
  return { encrypted, timestamp, keyId, appName };
};
