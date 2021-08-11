import { renderHook, act, RenderResult } from '@testing-library/react-hooks'
import useLocalStorage from './useLocalStorage'
import 'jest-localstorage-mock'

type TSutTypes<T> = {
  result: RenderResult<readonly [T, (value: T | ((val: T) => T)) => void]>
  key: string
  initialValues: T
}

function makeSut<T> (key: string, initialValues: T): TSutTypes<T> {
  const { result } = renderHook(() => useLocalStorage(key, initialValues))
  return { result, key, initialValues }
}

describe('useLocalStorage', () => {
  beforeEach(() => localStorage.clear())

  it('should return the auth key with the initial value sent', () => {
    const { result, initialValues } = makeSut<object>('auth', {})
    const auth = result.current[0]
    expect(auth).toEqual(initialValues)
  })

  it('should set the auth key with the value sent in localStorage', () => {
    const auth = { name: 'name_test' }
    const { result } = makeSut<object>('auth', {})
    const setAuth = result.current[1]
    act(() => setAuth(auth))
    expect(localStorage.setItem).toBeCalledWith('auth', JSON.stringify(auth))
  })

  it('should return the auth key with the one from localStorage', () => {
    const auth = { name: 'name_test' }
    const { result } = makeSut<object>('auth', {})
    const setAuth = result.current[1]
    act(() => setAuth(auth))
    expect(localStorage.setItem).toBeCalledWith('auth', JSON.stringify(auth))
  })

  it('should set the value in localStorage even if it is sent through a function', () => {
    const auth = (): { name: string } => ({ name: 'name_test' })
    const { result } = makeSut<object>('auth', {})
    const setAuth = result.current[1]
    act(() => setAuth(auth))
    expect(localStorage.setItem).toBeCalledWith('auth', JSON.stringify(auth()))
  })
})
