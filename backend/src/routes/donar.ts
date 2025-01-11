import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createDonarInput, updateDonarInput } from "@somuraj7/donars";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const donarRouter = new Hono <{
    Bindings: {
      DATABASE_URL :string,
      JWT_SECERT : string
    },
    Variables: {
            userId: string
        }
    
  }>();


  donarRouter.use("/*", async (c ,next) => {
    const authHeader = c.req.header('Authorization') || '';
     try{
      const user = await verify(authHeader, c.env.JWT_SECERT);
      if(user){
        c.set('userId', user.id as string);
        await next();
      }else{
        c.status(403)
        return c.json({error: 'U r not login'})
     }
    } catch(e){
      c.status(403)
      return c.json({error: 'U r not login'})
    }
  }
  )

  donarRouter.post('/',async (c) => {
    const body = await c.req.json();
    
    const { success } = createDonarInput.safeParse(body);

    if (!success) {
      c.status(411)
      return c.json({ error: 'Invalid input' })

    }
    const donarId = c.get('userId');
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,

    }).$extends(withAccelerate());
const donar = await prisma.donar.create({
  data: {
    name: body.name,
    age: body.age,
    address: body.address,
    contact: body.contact,
    bloodType: body.bloodType,
    lastDonation: body.lastDonation,
    available: body.available,
    image: body.image,
    email: body.email,
    rollNo: body.rollNo,
    password: body.password,
    donar: body.donar,
    donarId: parseInt(donarId)
  }
})
    return c.json({
      id: donar.id
    })

  })

  donarRouter.put('/',async (c) => {
    const body = await c.req.json();
    const { success } = updateDonarInput.safeParse(body);

    if (!success) {
      c.status(411)
      return c.json({ error: 'inputs are not correct' })

    }
 const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,

    }).$extends(withAccelerate());
    
    const donar = await prisma.donar.update({
      where: {
          id:body.id
      },
      data: {
        name: body.name,
        age: body.age,
        address: body.address,
        contact: body.contact,
        bloodType: body.bloodType,
        lastDonation: body.lastDonation,
        available: body.available,
        image: body.image
      }
    })
    return c.json({
      id: donar.id
    })

  })
   donarRouter.get('/bulk', async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,

    }).$extends(withAccelerate());
    const donars = await prisma.donar.findMany({
      select : {
        id: true,
        name: true,
        age: true,
        address: true,
        contact: true,
        bloodType: true,
        lastDonation: true,
        available: true,
        image: true
      }
    })
    return c.json(donars)
  })
  donarRouter.get('/:id', async (c) => {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,

    }).$extends(withAccelerate());
     try{
      const donar = await prisma.donar.findFirst({
        where: {
          id: parseInt(id)
        },
        select: {
          id: true,
          name: true,
          age: true,
          address: true,
          contact: true,
          bloodType: true,
          lastDonation: true,
          available: true,
          image: true,
          donar: true
        }
      })
      return c.json(donar)
    } catch(e){
      c.status(404)
      return c.json({error: 'Donor not found'})


      
     }
  })
// import { PrismaClient } from "@prisma/client";
// import { withAccelerate } from "@prisma/extension-accelerate";
// import { createDonarInput, updateDonarInput } from "@somuraj7/donars";
// import { Hono } from "hono";
// import { verify } from "hono/jwt";

// export const donarRouter = new Hono<{
//     Bindings: {
//         DATABASE_URL: string,
//         JWT_SECERT: string
//     },
//     Variables: {
//         userId: string
//     }
// }>();

// // Authentication middleware
// donarRouter.use("/*", async (c, next) => {
//     const authHeader = c.req.header('Authorization') || '';
//     try {
//         const user = await verify(authHeader, c.env.JWT_SECERT);
//         if (user) {
//             c.set('userId', user.id as string);
//             await next();
//         } else {
//             c.status(403);
//             return c.json({ error: 'Unauthorized: Please login' });
//         }
//     } catch (e) {
//         c.status(403);
//         return c.json({ error: 'Unauthorized: Invalid token' });
//     }
// });

// // Create new donor
// donarRouter.post('/', async (c) => {
//     try {
//         const body = await c.req.json();
//         const { success } = createDonarInput.safeParse(body);

//         if (!success) {
//             c.status(400);
//             return c.json({ error: 'Invalid input data' });
//         }

//         const donarId = c.get('userId');
//         const prisma = new PrismaClient({
//             datasourceUrl: c.env.DATABASE_URL,
//         }).$extends(withAccelerate());

//         const donar = await prisma.donar.create({
//             data: {
//                 name: body.name,
//                 age: body.age,
//                 address: body.address,
//                 contact: body.contact,
//                 bloodType: body.bloodType,
//                 lastDonation: body.lastDonation,
//                 available: body.available,
//                 image: body.image,
//                 donarId: parseInt(donarId)
//             }
//         });

//         return c.json({ id: donar.id });
//     } catch (error) {
//         c.status(500);
//         return c.json({ error: 'Failed to create donor' });
//     }
// });

// // Update donor
// donarRouter.put('/', async (c) => {
//     try {
//         const body = await c.req.json();
//         const { success } = updateDonarInput.safeParse(body);

//         if (!success) {
//             c.status(400);
//             return c.json({ error: 'Invalid input data' });
//         }

//         const prisma = new PrismaClient({
//             datasourceUrl: c.env.DATABASE_URL,
//         }).$extends(withAccelerate());

//         const donar = await prisma.donar.update({
//             where: { id: body.id },
//             data: {
//                 name: body.name,
//                 age: body.age,
//                 address: body.address,
//                 contact: body.contact,
//                 bloodType: body.bloodType,
//                 lastDonation: body.lastDonation,
//                 available: body.available,
//                 image: body.image
//             }
//         });

//         return c.json({ id: donar.id });
//     } catch (error) {
//         c.status(500);
//         return c.json({ error: 'Failed to update donor' });
//     }
// });

// // Get all donors
// donarRouter.get('/bulk', async (c) => {
//     try {
//         const prisma = new PrismaClient({
//             datasourceUrl: c.env.DATABASE_URL,
//         }).$extends(withAccelerate());

//         const donars = await prisma.donar.findMany({
//             select: {
//                 id: true,
//                 name: true,
//                 age: true,
//                 address: true,
//                 contact: true,
//                 bloodType: true,
//                 lastDonation: true,
//                 available: true,
//                 image: true
//             }
//         });

//         return c.json(donars);
//     } catch (error) {
//         c.status(500);
//         return c.json({ error: 'Failed to fetch donors' });
//     }
// });

// // Get donor by ID
// donarRouter.get('/:id', async (c) => {
//     try {
//         const id = c.req.param("id");
//         const prisma = new PrismaClient({
//             datasourceUrl: c.env.DATABASE_URL,
//         }).$extends(withAccelerate());

//         const donar = await prisma.donar.findFirst({
//             where: {
//                 id: parseInt(id)
//             },
//             select: {
//                 id: true,
//                 name: true,
//                 age: true,
//                 address: true,
//                 contact: true,
//                 bloodType: true,
//                 lastDonation: true,
//                 available: true,
//                 image: true
//             }
//         });

//         if (!donar) {
//             c.status(404);
//             return c.json({ error: 'Donor not found' });
//         }

//         return c.json(donar);
//     } catch (error) {
//         c.status(500);
//         return c.json({ error: 'Failed to fetch donor' });
//     }
// });