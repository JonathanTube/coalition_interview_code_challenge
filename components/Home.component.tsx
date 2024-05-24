"use client"
import DiagnosisHistory from "@/components/DiagnosisHistory.component"
import DiagnosisList from "@/components/DiagnosisList.component"
import LabelResult from "@/components/LabelResult.component"
import LoginForm from "@/components/LoginForm.component"
import PatientInfo from "@/components/PatientInfo.component"
import Patients from "@/components/PatientList.component"
import { useContext, useState } from "react"
import PatientContext from "store/patient.context"
import { Patient } from "types/Patient.d"

const Home: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([])

  const patientContext = useContext(PatientContext)

  const LoginHandler = (patients: Patient[]) => {
    setPatients(patients)
    if (patients.length > 0) {
      patientContext.setPatient(patients[0])
    }
  }

  if (patients.length === 0) {
    return (
      <>
        <LoginForm callback={LoginHandler} />
      </>
    )
  }

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 mr-8">
        <Patients patients={patients} />
      </div>
      <div className="col-span-6">
        <div className="flex flex-col">
          <DiagnosisHistory />
          <DiagnosisList />
        </div>
      </div>
      <div className="col-span-3 ml-8">
        <PatientInfo patient={patientContext.patient} />
        <LabelResult />
      </div>
    </div>
  )
}

export default Home
