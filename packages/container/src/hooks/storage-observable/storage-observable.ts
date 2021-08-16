import { useEffect } from 'react'

const storageObservable = (): void => {
  useEffect(() => {
    console.log('asdsadkdsakk')
    window.addEventListener('storage', () => {
      console.log('addEventListener')
    }, false)
  }, [])
}

export default storageObservable
