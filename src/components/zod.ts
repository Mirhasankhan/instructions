// import { z } from 'zod';

// const userNameSchema = z.object({
//   firstName: z.string().min(1),
//   middleName: z.string().min(5),
//   lastName: z.string().refine((value) => /^[a-zA-Z ]+$/.test(value), {
//     message: 'Invalid last name format',
//   }),
// });

// const guardianSchema = z.object({
//   fatherName: z.string(),
//   motherName: z.string(),
//   fatherOccupation: z.string(),
//   motherOccupation: z.string(),
// });

// const studentZodSchema = z.object({
//   id: z.string(),
//   name: userNameSchema,
//   gender: z
//     .enum(['male', 'female'])
//     .refine((value) => typeof value === 'string'),
//   dateOfBirth: z.string().optional(),
//   email: z.string().email(),
//   contactNo: z.string(),
//   emergencyNo: z.string(),
//   bloodGroup: z
//     .enum([
//       'A',
//       'B',
//       'AB',
//       'O',
//       'A+',
//       'A-',
//       'B+',
//       'B-',
//       'AB+',
//       'AB-',
//       'O+',
//       'O-',
//     ])
//     .optional(),
//   presentAddress: z.string(),
//   permanentAddress: z.string(),
//   guardian: guardianSchema,
//   profileImg: z.string().optional(),
//   isActive: z.enum(['Active', 'Blocked']).default('Active'),
// });

// export default studentZodSchema;
