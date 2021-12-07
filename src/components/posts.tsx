import { h, isSSR } from 'nano-jsx/lib/core'
import { Component } from 'nano-jsx/lib/component'
import { nodeFetch } from '../server/nodeFetch'
import { Link } from 'nano-jsx/lib/components/router'

export class Posts extends Component {
  static async Fetch(id?: number) {
    let url = 'http://localhost:3000/api/posts'
    if (id && typeof id === 'number') url += '/' + id

    if (!isSSR()) {
      const res = await fetch(url)
      return await res.json()
    } else {
      const posts = await nodeFetch(url)
      return posts
    }
  }

  async didMount() {
    const posts = await Posts.Fetch()
    this.update(posts)
  }

  render(posts: { id: string; title: string }[]) {
    if (!posts) posts = this.props?.data

    const { path } = this.props.route

    if (posts && Array.isArray(posts))
      return (
        <ul>
          {posts.map(p => {
            return (
              <li>
                <Link to={`${path}/${p.id}`}>{p.title}</Link>
              </li>
            )
          })}
        </ul>
      )

    return <p>loading...</p>
  }
}
