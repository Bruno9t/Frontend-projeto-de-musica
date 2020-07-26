import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

function useLocalStorageState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    const storageItem = localStorage.getItem(key)

    if (storageItem) {
      return JSON.parse(storageItem)
    }
    return initialState
  })

  useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [
    key,
    state,
  ])

  return [state, setState]
}

export default useLocalStorageState
