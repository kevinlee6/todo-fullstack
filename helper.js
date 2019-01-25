const validateRegister = fieldsObj => {
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

module.exports = { validateRegister };
