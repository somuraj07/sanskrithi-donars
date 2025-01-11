import z from 'zod';

export const signupInput = z.object({
    email:z.string().email(),
    password:z.string().min(6),
    name:z.string().min(3),
    rollNO:z.string().min(3),
    bloodType:z.string(),
    address:z.string().min(3),
    age:z.string().min(1),
    lastDonation:z.string().min(3),
    contact:z.string().min(3),
    image : z.string().min(3),
    available:z.boolean()

})
export const signinInput = z.object({
    email: z.string().email(),
    password :z.string().min(6),
    name: z.string().optional()
})
export const createDonarInput = z.object({
    email:z.string().email(),
    password:z.string().min(6),
    name:z.string().min(3),
    rollNO:z.string().min(3),
    bloodType:z.string(),
    address:z.string().min(3),
    age:z.string().min(1),
    lastDonation:z.string().min(3),
    contact:z.string().min(3),
    image : z.string().min(3),
    available:z.boolean()
})
export const updateDonarInput = z.object({
    email:z.string().email(),
    password:z.string().min(6),
    name:z.string().min(3),
    rollNO:z.string().min(3),
    bloodType:z.string(),
    address:z.string().min(3),
    age:z.string().min(1),
    lastDonation:z.string().min(3),
    contact:z.string().min(3),
    image : z.string().min(3),
    available:z.boolean()
})

export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreateDonarInput = z.infer<typeof createDonarInput>
export type UpdateDonarInput = z.infer<typeof updateDonarInput>

