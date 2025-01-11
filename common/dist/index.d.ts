import z from 'zod';
export declare const signupInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodString;
    rollNO: z.ZodString;
    bloodType: z.ZodString;
    address: z.ZodString;
    age: z.ZodString;
    lastDonation: z.ZodString;
    contact: z.ZodString;
    image: z.ZodString;
    available: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name: string;
    rollNO: string;
    bloodType: string;
    address: string;
    age: string;
    lastDonation: string;
    contact: string;
    image: string;
    available: boolean;
}, {
    email: string;
    password: string;
    name: string;
    rollNO: string;
    bloodType: string;
    address: string;
    age: string;
    lastDonation: string;
    contact: string;
    image: string;
    available: boolean;
}>;
export declare const signinInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name?: string | undefined;
}, {
    email: string;
    password: string;
    name?: string | undefined;
}>;
export declare const createDonarInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodString;
    rollNO: z.ZodString;
    bloodType: z.ZodString;
    address: z.ZodString;
    age: z.ZodString;
    lastDonation: z.ZodString;
    contact: z.ZodString;
    image: z.ZodString;
    available: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name: string;
    rollNO: string;
    bloodType: string;
    address: string;
    age: string;
    lastDonation: string;
    contact: string;
    image: string;
    available: boolean;
}, {
    email: string;
    password: string;
    name: string;
    rollNO: string;
    bloodType: string;
    address: string;
    age: string;
    lastDonation: string;
    contact: string;
    image: string;
    available: boolean;
}>;
export declare const updateDonarInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodString;
    rollNO: z.ZodString;
    bloodType: z.ZodString;
    address: z.ZodString;
    age: z.ZodString;
    lastDonation: z.ZodString;
    contact: z.ZodString;
    image: z.ZodString;
    available: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name: string;
    rollNO: string;
    bloodType: string;
    address: string;
    age: string;
    lastDonation: string;
    contact: string;
    image: string;
    available: boolean;
}, {
    email: string;
    password: string;
    name: string;
    rollNO: string;
    bloodType: string;
    address: string;
    age: string;
    lastDonation: string;
    contact: string;
    image: string;
    available: boolean;
}>;
export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type CreateDonarInput = z.infer<typeof createDonarInput>;
export type UpdateDonarInput = z.infer<typeof updateDonarInput>;
