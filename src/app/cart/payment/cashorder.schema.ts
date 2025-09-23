import * as z from 'zod';

export const shipingschema = z.object({

  details: z.string()
    .nonempty('Details are required')
    .min(5, { message: "Details must be at least 5 characters long" }),

  phone: z.string()
    .nonempty('Phone is required')
    .regex(/^01[0125]\d{8}$/, { 
      message: "Invalid phone number. It must be 11 digits and start with 010, 011, 012, or 015." 
    }),

  city: z.string()
    .nonempty('City is required')
    .min(2, { message: "City must be at least 2 characters long" })
    .max(30, { message: "City cannot exceed 30 characters" }),
});


