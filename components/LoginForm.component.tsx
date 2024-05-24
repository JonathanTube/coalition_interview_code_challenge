"use client"
import React, { FormEvent, useEffect, useRef, useState } from "react"
import { Patient } from "types/Patient.d"

type Props = {
  callback: (patients: Patient[]) => void
}
const LoginForm: React.FC<Props> = ({ callback }) => {
  const [loading, setLoading] = useState<boolean>()
  const [token, setToken] = useState<string | undefined>()
  const [message, setMessage] = useState<string | undefined>()
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()
    const username = usernameRef.current?.value
    const password = passwordRef.current?.value
    if (username && password) {
      const concatStr = `${username}:${password}`
      const token = btoa(concatStr)
      setToken(token)
    }
  }

  useEffect(() => {
    if (!token) return
    setLoading(true)
    fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
      method: "GET",
      headers: { Authorization: `Basic ${token}` }
    })
      .then((response) => response.json())
      .then((result) => {
        const { error, error_message } = result
        if (error) {
          setMessage(error_message)
          setToken(undefined)
          return
        }
        callback(result)
        setLoading(false)
      })
      .catch((error) => {
        alert(error)
        setLoading(false)
      })
  }, [token])

  const resetMsg = () => {
    setMessage(undefined)
  }

  return (
    <div className="w-full flex items-center justify-center flex-col pt-20">
      <form
        onSubmit={submitHandler}
        className="rounded-xl bg-white px-20 py-8 text-center text-sm"
      >
        <h1 className="text-xl font-bold">Login</h1>
        <div className="mt-5">
          <label htmlFor="username" className="font-semibold">
            Username:
          </label>
          <input
            type="text"
            id="username"
            className="h-8 rounded ml-2 px-2"
            ref={usernameRef}
            onChange={resetMsg}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="password" className="font-semibold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="h-8 rounded ml-2 px-2"
            ref={passwordRef}
            onChange={resetMsg}
          />
        </div>
        {loading ? (
          <button
            disabled={loading}
            type="submit"
            className="rounded-full bg-gray-300 text-sm w-55 h-10 mt-10"
          >
            Loading...
          </button>
        ) : (
          <button
            disabled={loading}
            type="submit"
            className="rounded-full bg-active text-sm w-55 h-10 mt-10 hover:opacity-70 cursor-pointer focus:border-none"
          >
            Submit
          </button>
        )}

        <div className="text-red-500 font-semibold focus:border-none">
          {message}
        </div>
      </form>
    </div>
  )
}

export default LoginForm
