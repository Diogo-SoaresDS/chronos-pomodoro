import { PlayCircleIcon } from 'lucide-react'
import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { Input } from './components/Input'
import { Cycles } from './components/Cycles'
import { Button } from './components/Button'

import './styles/theme.css'
import './styles/global.css'

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <Input
              id='input'
              labelText='task:'
              type='text'
              placeholder='Digite uma tarefa'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <Button icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>
    </>
  )
}
