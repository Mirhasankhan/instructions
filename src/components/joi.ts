// import Joi from 'joi';

// // Define Joi schema for UserName
// const userNameJoiSchema = Joi.object({
//   firstName: Joi.string().required(),
//   middleName: Joi.string().required().min(5),
//   lastName: Joi.string().required(),
// });
// // Define Joi schema for Guardian
// const guardianJoiSchema = Joi.object({
//   fatherName: Joi.string().required(),
//   motherName: Joi.string().required(),
//   fatherOccupation: Joi.string().required(),
//   motherOccupation: Joi.string().required(),
// });

// const studentJoiSchema = Joi.object({
//   id: Joi.string().required(),
//   name: userNameJoiSchema.required(),
//   gender: Joi.string().valid('male', 'female').required(),
//   dateOfBirth: Joi.string(),
//   email: Joi.string().email().required(),
//   contactNo: Joi.string().required(),
//   emergencyNo: Joi.string().required(),
//   bloodGroup: Joi.string().valid(
//     'A',
//     'B',
//     'AB',
//     'O',
//     'A+',
//     'A-',
//     'B+',
//     'B-',
//     'AB+',
//     'AB-',
//     'O+',
//     'O-',
//   ),
//   presentAddress: Joi.string().required(),
//   permanentAddress: Joi.string().required(),
//   guardian: guardianJoiSchema.required(),
//   profileImg: Joi.string(),
//   isActive: Joi.string().valid('Active', 'Blocked').default('Active'),
// });

// export default studentJoiSchema;
