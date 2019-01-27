import { verify } from "jsonwebtoken";

export const decode = async jwt => {
  const SECRET = process.env.REACT_APP_SECRET;
  try {
    return await verify(jwt, SECRET);
  } catch (err) {
    return err;
  }
};

const titleCaseHelper = word =>
  word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();

export const titleCase = text =>
  text
    .split(/[_\s]/gi)
    .map(word => titleCaseHelper(word))
    .join(" ");

export const urlFriendly = text => text.replace(/\s+/gi, "").toLowerCase();

export const validateRegister = fieldsObj => {
  const { email, password, confirm } = fieldsObj;
  // regex will allow something as simple as 'a@a.a'
  const re = /.+@.+\..+/;
  return (
    email &&
    password &&
    confirm &&
    password.length > 5 &&
    password === confirm &&
    re.test(email)
  );
};
