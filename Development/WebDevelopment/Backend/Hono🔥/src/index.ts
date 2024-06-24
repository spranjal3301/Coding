import { Hono } from 'hono'
import { env } from 'hono/adapter'

const app = new Hono()

app.get('/',(c) => {
   return c.text('Hello Hono!')
})

app.post('/', async (c) => { //! c: Context {req,res,query,text,json,env}
  const body = await c.req.json()//!Body 
  const {authorization}=c.req.header();//!Header
  const {search,filter}=c.req.query();//!Query
  const name=c.env //!Env (.env-->wrangler.toml)

  return c.text('Hello Hono!')
})

//!Middleware
async function middleware(c: any, next: any) {
  next();
}

app.use(middleware);

// Module Worker
export default app;
