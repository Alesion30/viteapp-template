import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '~/components/button'
import logo from '~/logo.svg'
import { PATH } from '~/router/path'

/** ルートページ */
export const RootPage: React.VFC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='text-center'>
      <header className='bg-slate-700 min-h-screen flex flex-col align-center justify-center text-3xl text-white'>
        <img src={logo} className='h-72' alt='logo' />
        <p className='text-4xl'>Hello Vite + React!</p>
        <p className='my-5'>
          count is:{' '}
          <Button outlined onClick={() => setCount((count) => count + 1)}>
            {count}
          </Button>
        </p>
        <p className='my-5'>
          <Link to={PATH.XXX}>
            <Button className='w-72'>xxxページに遷移</Button>
          </Link>
        </p>
      </header>
    </div>
  )
}
