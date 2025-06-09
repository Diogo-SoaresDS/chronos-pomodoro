import { PlayCircleIcon } from 'lucide-react'
import { Input } from '../Input'
import { Button } from '../Button'
import { Cycles } from '../Cycles'

export function Form() {
  return (
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
  )
}
