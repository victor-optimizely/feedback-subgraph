import crypto from 'crypto';

const encodeBase64 = (value) => {
  return Buffer.from(value).toString('base64');
};
export const generateHmac = ({ alg = 'sha256', applicationKey, applicationSecret, method = "GET", target = '/', body = "" }) => {
    // const encodedSecret = Buffer.from(applicationSecret).toString('base64')
    console.log({ applicationKey, applicationSecret, method, target, body })
    const timestamp = new Date().getTime();
    const nonce = Math.random().toString(36).substring(7);
    const md5Body = crypto.createHash('md5').update(body).digest('hex');
    const base64Body = encodeBase64(md5Body);
    const message = `${applicationKey}${method}${target}${timestamp}${nonce}${base64Body}`;
    const hmac = crypto.createHmac(alg, applicationSecret);
    hmac.update(message);
    const requestHmac = hmac.digest('hex');
    const signature = encodeBase64(requestHmac)

    return `epi-hmac ${applicationKey}:${timestamp.toString()}:${nonce}:${signature.toString()}`
}

