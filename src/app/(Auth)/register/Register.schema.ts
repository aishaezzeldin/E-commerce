import * as z from 'zod';

 export const schema = z.object({
     email: z.string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  
  password: z.string().nonempty('Password is required')
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one special character" })

    , rePassword: z.string().nonempty('Confirm Password is required') 
    .min(1, { message: "Confirm password is required" }),

     phone: z.string().nonempty('Phone is required') 
     .min(1, { message: "Phone number is required" })
      .regex(/^01[0125]\d{8}$/, { message: "Invalid phone number. It must be 11 digits and start with 010, 011, or 015.", }),
      
      name: z.string().nonempty('Username is required') 
      .min(3, { message: "Username must be at least 3 characters long" }) 
      .max(20, { message: "Username cannot exceed 20 characters" }),



   }).refine((data) => data.password === data.rePassword, { error: "Passwords do not match", path: ["rePassword"], });
  


