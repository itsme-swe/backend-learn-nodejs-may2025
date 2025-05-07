const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Enter the valid name");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("EmailId is not valid");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Please enter the strong password");
  }
};

const validateEditProfileData = (req) => {
  const data = req.body;
  const allowedEditMethods = ["firstName", "age", "emailId", "bio", "skills"];

  const isEditAllowed = Object.keys(data).every((field) =>
    allowedEditMethods.includes(field)
  );
  if (!isEditAllowed) {
    throw new Error("Update not allowed");
  }

  if (data?.skills.length > 4) {
    throw new Error("Can only add upto 4 skills");
  }

  const updateData = {};

  for (const key of allowedEditMethods) {
    if (data[key] !== undefined) {
      updateData[key] = data[key];
    }
  }

  return updateData;
};

module.exports = { validateSignUpData, validateEditProfileData };
