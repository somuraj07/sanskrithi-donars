import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { userRouter } from './routes/user'
import { donarRouter } from './routes/donar'
const app = new Hono<{
  Bindings: {
    DATABASE_URL :string,
    JWT_SECERT : string
  }
}>()
    app.use('/*', cors())
    app.route('/api/v1/user',userRouter)
    app.route('api/v1/donar',donarRouter)


export default app
