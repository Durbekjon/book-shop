const SALT = 8;
const AT_SECRET = process.env.AT_SECRET || 'secret';
const AT_EXPIRES = process.env.AT_EXPIRES || '1d';
const RT_SECRET = process.env.RT_SECRET || 'rtsecret';
const RT_EXPIRES = process.env.RT_EXPIRES || '7d';
export { AT_EXPIRES, AT_SECRET, RT_EXPIRES, RT_SECRET, SALT };
