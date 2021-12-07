import { h } from 'nano-jsx/lib/core'
import { Link } from 'nano-jsx/lib/components/router'

export const Navigation = () => {
  return (
    <nav id="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  )
}
