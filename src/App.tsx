import { Heading } from './components/Heading'

import './styles/theme.css'
import './styles/global.css'
import { TimerIcon } from 'lucide-react'

export function App() {
  return (
    <>
      <Heading>
        Olá Mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
        tenetur, saepe beatae adipisci aliquam exercitationem quo animi aut eum
        non! Ea, sint nam exercitationem reiciendis laborum voluptatem eveniet
        nesciunt quibusdam.
      </p>
    </>
  )
}
