import Home from "@/components/Home.component"
import { render, screen } from "@testing-library/react"

it("renders homepage unchanged", () => {
  render(<Home />)
  expect(screen.getByRole("heading")).toHaveTextContent("Login")
})
