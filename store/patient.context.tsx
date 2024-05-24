"use client"
import { createContext, useState } from "react"
import { Patient } from "types/Patient.d"

export interface PatientContextType {
  patient: Patient | undefined
  setPatient: (patient: Patient) => void
}

const PatientContext = createContext<PatientContextType>({
  patient: undefined,
  setPatient: () => {}
})

type Props = {
  children: React.ReactNode
}

export const PatientProvider: React.FC<Props> = ({ children }) => {
  const [patient, setPatient] = useState<Patient>()

  const patientHandler = (patient: Patient) => {
    setPatient(patient)
  }

  const context = {
    patient: patient,
    setPatient: patientHandler
  }

  return (
    <PatientContext.Provider value={context}>
      {children}
    </PatientContext.Provider>
  )
}

export default PatientContext
