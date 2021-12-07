import { h, isSSR, FC } from 'nano-jsx/lib/core'
import { Component } from 'nano-jsx/lib/component'
import { nodeFetch } from '../server/nodeFetch'
import { Link, Listener } from 'nano-jsx/lib/components/router'
import { Posts } from './posts'

export class Post extends Component {
  listener = Listener().use()

  didUnmount() {
    this.listener.cancel()
  }

  async didMount() {
    this.listener.subscribe(async (currPath, prevPath) => {
      if (currPath === prevPath) return
      if (/^\/posts\/\d+$/.test(currPath)) {
        const { pathname } = window.location
        const id = pathname.match(/\d+$/)
        if (id) {
          const post = await Posts.Fetch(parseInt(id[0]))
          this.update({ post, id })
        }
      }
    })

    const { pathname } = window.location
    const id = pathname.match(/\d+$/)
    if (id) {
      const post = await Posts.Fetch(parseInt(id[0]))
      this.update({ post, id })
    }
  }

  render(_post: any) {
    if (!isSSR()) {
      if (_post) {
        const { post, id } = _post
        return (
          <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link to={`/posts/${parseInt(id) + 1}`}>Next Post</Link>
          </div>
        )
      }

      return <p>loading...</p>
    }

    const { data } = this.props

    return (
      <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        <Link to={`/posts/${parseInt(data.id) + 1}`}>Next Post</Link>
      </div>
    )
  }
}
