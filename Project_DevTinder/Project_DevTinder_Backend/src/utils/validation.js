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
  const allowedEditMethods = [
    "firstName",
    "lastName",
    "age",
    "gender",
    "emailId",
    "bio",
    "skills",
    "photoUrl",
  ];

  const isEditAllowed = Object.keys(data).every((field) =>
    allowedEditMethods.includes(field)
  );
  if (!isEditAllowed) {
    throw new Error("Update not allowed");
  }

  // This line protects your code by only accessing .length if skills is a valid array — avoiding crashes when skills is missing or invalid.
  if (Array.isArray(data.skills) && data.skills.length > 6) {
    throw new Error("Can only add upto 6 skills");
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
