import bcrypt from 'bcrypt';

export default (password: string = '') => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err: Error, hash: string) => {
      if (err) return reject(err);

      resolve(hash);
    });
  });
};