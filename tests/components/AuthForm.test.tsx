import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"

import AuthForm from "@/components/AuthForm"

describe("AuthForm", () => {
  it("renders email and password fields", () => {
    render(<AuthForm mode="login" />)

    expect(screen.getByLabelText("Email")).toBeInTheDocument()
    expect(screen.getByLabelText("Password")).toBeInTheDocument()
  })

  it("password field defaults to type password", () => {
    render(<AuthForm mode="login" />)

    expect(screen.getByLabelText("Password")).toHaveAttribute("type", "password")
  })

  it("toggles password visibility on click", () => {
    render(<AuthForm mode="login" />)

    const toggle = screen.getByRole("button", { name: /show password/i })
    fireEvent.click(toggle)

    expect(screen.getByLabelText("Password")).toHaveAttribute("type", "text")

    const hideToggle = screen.getByRole("button", { name: /hide password/i })
    fireEvent.click(hideToggle)

    expect(screen.getByLabelText("Password")).toHaveAttribute("type", "password")
  })

  it("logs email and password on submit", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {})

    render(<AuthForm mode="login" />)

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    })
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "secret123" },
    })
    fireEvent.submit(screen.getByRole("button", { name: /login/i }))

    expect(spy).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "secret123",
    })

    spy.mockRestore()
  })

  it("renders a link to signup in login mode", () => {
    render(<AuthForm mode="login" />)

    const link = screen.getByRole("link", { name: /sign up/i })
    expect(link).toHaveAttribute("href", "/signup")
  })

  it("renders a link to login in signup mode", () => {
    render(<AuthForm mode="signup" />)

    const link = screen.getByRole("link", { name: /log in/i })
    expect(link).toHaveAttribute("href", "/login")
  })
})
