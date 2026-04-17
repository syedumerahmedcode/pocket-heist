'use client'

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import styles from "./AuthForm.module.css"

interface AuthFormProps {
  mode: 'login' | 'signup'
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const isLogin = mode === "login"

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log({ email, password })
  }

  return (
    <>
      <h2 className="form-title">
        {isLogin ? "Log in to Your Account" : "Sign Up for an Account"}
      </h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <div className={styles.passwordWrapper}>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
            <button
              type="button"
              className={styles.toggle}
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        <button type="submit" className="btn">
          {isLogin ? "Login" : "Sign Up"}
        </button>
        <p className={styles.switchLink}>
          {isLogin ? (
            <>Don&apos;t have an account? <Link href="/signup">Sign up</Link></>
          ) : (
            <>Already have an account? <Link href="/login">Log in</Link></>
          )}
        </p>
      </form>
    </>
  )
}
