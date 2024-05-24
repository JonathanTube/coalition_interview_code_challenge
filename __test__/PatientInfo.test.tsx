import PatientInfo from "@/components/PatientInfo.component"
import { render, screen, within } from "@testing-library/react"
import { Patient } from "types/Patient.d"

it("renders patientList", () => {
  const patient: Patient = {
    name: "Jonathan",
    profile_picture: "",
    gender: "Male",
    age: 0,
    date_of_birth: "2000/12/11",
    emergency_contact: "(711) 914-6696",
    phone_number: "(711) 984-6696",
    insurance_type: "Premier Auto Corporation",
    diagnosis_history: [],
    diagnostic_list: [],
    lab_results: []
  }
  render(<PatientInfo patient={patient} />)
  expect(screen.getByRole("heading")).toHaveTextContent(patient.name)
  within(screen.getAllByRole("listitem")[0]).getByText(patient.date_of_birth)
  within(screen.getAllByRole("listitem")[1]).getByText(patient.gender)
  within(screen.getAllByRole("listitem")[2]).getByText(patient.phone_number)
  within(screen.getAllByRole("listitem")[3]).getByText(
    patient.emergency_contact
  )
  within(screen.getAllByRole("listitem")[4]).getByText(patient.insurance_type)
})
