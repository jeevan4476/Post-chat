import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'


export const blog = new Hono<{
    Bindings:{
      DATABASE_URL:string,
      JWT_SECRET:string
    },
    Variables:{
        jwtPayload: string;
        }
  }>()
blog.use("/*",async (c,next)=>{
    try{
        const authHeader = c.req.header('Authorization') || '';
    const response = await verify(authHeader, c.env.JWT_SECRET);
    if (response) {
      c.set('jwtPayload', response.id );
      await next();
    }
    }catch(e){
        c.status(403);
    return c.json({ message: 'UnAuthorized' });
    }
    
})
blog.post("/blo",async (c)=>{

    const userId =  c.get("jwtPayload");
    const prisma = new  PrismaClient({
        datasourceUrl:c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();
	const posts = await prisma.post.create({
		data: {
			title: body.title,
			content: body.content,
			authorId: userId
		}
	});
	return c.json({
		id: posts.id
	});

})
blog.put("/blo",async (c)=>{
    const userId = c.get("jwtPayload");
    const prisma = new  PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();
	prisma.post.update({
		where: {
			id: body.id,
			authorId: userId
		},
		data: {
			title: body.title,
			content: body.content
		}
	});

	return c.text('updated post');
})
blog.get("/blo/:id",async (c)=>{
  const id = c.req.param("id");
  console.log(id)
  const prisma = new  PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const post = await prisma.post.findUnique({
        where:{
            id:id
        }
    })
    return c.json(post)
})
blog.get("/bulk",async (c)=>{
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const posts = await prisma.post.findMany({});

	return c.json(posts);
})

