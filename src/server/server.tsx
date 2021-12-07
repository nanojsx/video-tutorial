import { express, Static } from 'express6'
import { h, renderSSR } from 'nano-jsx'
import { App } from '../components/app.js'
import { makeHTML } from './makeHTML.js'
import { db } from './db.js'
import { Posts } from '../components/posts.js'

const app = express()
const port = 3000

app.use('/static', Static('dist/client'))

app.get('/api/posts', (req, res) => {
  const posts = db.map(post => ({
    id: post.id,
    title: post.title
  }))
  res.send(posts)
})

app.get('/api/posts/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const post = db.filter(post => post.id === id)
  res.send(post[0])
})

app.get('/posts', async (req, res) => {
  const posts = await Posts.Fetch()
  const app = renderSSR(() => <App data={posts} />, { pathname: req.url })
  const html = makeHTML(app)
  res.send(html)
})

app.get('/posts/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  const post = await Posts.Fetch(id)
  const app = renderSSR(() => <App data={post} />, { pathname: req.url })
  const html = makeHTML(app)
  res.send(html)
})

app.get('*', (req, res) => {
  const app = renderSSR(App, { pathname: req.url })
  const html = makeHTML(app)
  res.send(html)
})

const server = app.listen(port, () => {
  console.log(`Server on http://127.0.0.1:${port}`)
})

process.on('SIGTERM', () => {
  server.close()
})
