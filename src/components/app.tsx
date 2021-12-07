import { FC, h } from 'nano-jsx'
import { Content } from './content'
import { Navigation } from './navigation'

export const App: FC<{ data: any }> = props => {
  return (
    <div id="root">
      <header>
        <Navigation />
      </header>

      <Content {...props} />

      <footer>
        <p>footer</p>
      </footer>
    </div>
  )
}
