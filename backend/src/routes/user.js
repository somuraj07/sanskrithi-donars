import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt';
import { signupInput, signinInput } from '@somuraj7/donars';
export const userRouter = new Hono();
userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "inputs are not corect "
        });
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const user = await prisma.donar.create({
            data: {
                email: body.email,
                password: body.password,
                name: body.name,
                rollNo: body.rollNo,
                bloodType: body.bloodType,
                address: body.address,
                age: body.age,
                lastDonation: body.lastDonation,
                contact: body.contact,
                image: body.image,
                available: body.available,
                donar: body.donar,
                donarId: body.donarId
            }
        });
        const token = await sign({ id: user.id }, c.env.JWT_SECERT);
        return c.text(token);
    }
    catch (e) {
        c.status(500);
        return c.text("user already exist");
    }
});
userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "inputs are not corect "
        });
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const user = await prisma.donar.findFirst({
            where: {
                email: body.username,
                password: body.password,
                name: body.name,
            }
        });
        if (!user) {
            c.status(411);
            return c.text("user already exists");
        }
        const jwt = await sign({
            id: user.id
        }, c.env.JWT_SECERT);
        return c.text(jwt);
    }
    catch (e) {
        c.status(403);
        return c.text("user already exists");
    }
});
