const joi = require("joi");

const validateUser = (user) => {
  const schema = joi.object({
    name: joi.string().min(3).required(),
    password: joi
      .string()
      .min(8)
      .max(12)
      .pattern(
        new RegExp(
          "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+[]{}|;:',.<>?/~]).*$"
        )
      )
      .required(),
    email: joi.string().email().required(),
  });
  return schema.validate(user);
};

const validateProduct = (product) => {
  const schema = joi.object({
    title: joi.string().required(),
    price: joi.number().required(),
    description: joi.string().required(),
    category: joi.string().required(),
    image: joi.string().required(),
    quantity: joi.number().required(),
  });
  return schema.validate(product);
};

const validatePatch = (product) => {
  const schema = joi.object({
    title: joi.string().allow(),
    price: joi.number().allow(),
    description: joi.string().allow(),
    category: joi.string().allow(),
    image: joi.string().allow(),
    quantity: joi.number().allow(),
  });
  return schema.validate(product);
};

const validateUserPatch = (user) => {
  const schema = joi.object({
    name: joi.string().min(3).allow(),
    password: joi
      .string()
      .min(8)
      .max(12)
      .pattern(
        new RegExp(
          "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+[]{}|;:',.<>?/~]).*$"
        )
      )
      .allow(),
    email: joi.string().email().allow()
  });
  return schema.validate(user);
};

module.exports = { validateUser, validateProduct, validatePatch, validateUserPatch };
