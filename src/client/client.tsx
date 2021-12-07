import { h, hydrate } from 'nano-jsx/lib/core'
import { Navigation } from '../components/navigation'
import { Content } from '../components/content'

window.addEventListener('load', () => {
  hydrate(Navigation, document.getElementById('navigation'))
  hydrate(Content, document.getElementById('content'))
})
