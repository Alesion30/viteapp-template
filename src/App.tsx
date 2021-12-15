import { useState } from 'react'

import logo from '~/logo.svg'

const App: React.VFC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='text-center'>
      <header className='bg-slate-700 min-h-screen flex flex-col align-center justify-center text-3xl text-white'>
        <img src={logo} className='h-72' alt='logo' />
        <p className='text-4xl'>Hello Vite + React!</p>
        <p className='my-5'>
          count is:
          <button
            type='button'
            className='bg-gray-50 hover:bg-gray-100 text-black p-2 mx-2'
            onClick={() => setCount((count) => count + 1)}
          >
            {count}
          </button>
        </p>
        <p className='my-2'>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p className='my-2'>
          <a className='text-cyan-300' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
            Learn React
          </a>
          {' | '}
          <a
            className='text-cyan-300'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
