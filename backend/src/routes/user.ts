import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signinInput, signupInput } from '@zacks_69/common-app'


export const user = new Hono<{
    Bindings:{
      DATABASE_URL:string,
      JWT_SECRET:string
    }
  }>()

user.post("/signup",async (c)=>{
  const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
	const body = await c.req.json();
  const {success} =  signupInput.safeParse(body);
  if(!success){
    c.status(411);
    return c.json({
      message:"couldnt reterive the data"
    })
  }
  
	try {
		const user = await prisma.user.create({
			data: {
				email: body.email ,
				password: body.password
			}
		});
    const jwt = await sign({id:user.id},c.env.JWT_SECRET);
    return c.text(jwt);
	} catch(e) {
		 c.status(403)
     return c.json({error:"error while signing up"});

	}
})

user.post("/signin",async (c)=>{
    const prisma = new PrismaClient({
          datasourceUrl: c.env?.DATABASE_URL,
      }).$extends(withAccelerate());
      const body = await c.req.json();
      const {success } = signinInput.safeParse(body);
      if(!success){
        c.status(411);
        return c.json({
          message:"couldnt signin"
        })
      }
    const user =   await prisma.user.findUnique({
        where:{
          email:body.email,
        }
      })
      if(!user){
        c.status(411);
        return c.json({
          error:"user not found"
        })
      }
      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({ jwt });
    
    })
