import { h, FC } from 'nano-jsx/lib/core'
import { Route, Routes } from 'nano-jsx/lib/components/router'
import { Posts } from './posts'
import { Post } from './post'

export const Content: FC = props => {
  return (
    <section id="content">
      <Routes fallback={() => <p>404 | not found</p>}>
        <Route exact path="/">
          <h2>Welcome to my page.</h2>
        </Route>
        <Route exact path="/about">
          <h2>Hi it's me.</h2>
        </Route>
        <Route exact path="/contact">
          <h2>Call me!</h2>
        </Route>
        <Route exact path="/posts">
          <Posts {...props} />
        </Route>
        <Route exact path="/posts/:id">
          <Post {...props} />
        </Route>
      </Routes>
    </section>
  )
}
