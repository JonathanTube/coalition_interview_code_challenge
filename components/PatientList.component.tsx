"use client"
import Image from "next/image"
import React, { memo, useContext } from "react"
import PatientContext from "store/patient.context"
import { Patient } from "types/Patient.d"
import PatientItem from "./PatientItem.component"

type Props = {
  patients: Patient[]
}
const PatientList: React.FC<Props> = ({ patients }) => {
  const patientContext = useContext(PatientContext)

  return (
    <div className="bg-white pt-5 rounded-2xl" style={{ height: "1054px" }}>
      {patients.length === 0 ? (
        <div className="flex items-center justify-center font-semibold pt-20">
          Loading...
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between px-5">
            <h1 className="text-2xl font-extrabold">Patients</h1>
            <Image
              src="/icon/search.svg"
              alt="setting"
              width={20}
              height={20}
            />
          </div>

          <section
            className="mt-10 overflow-y-scroll overflow-x-hidden"
            style={{ height: "960px" }}
          >
            {patients.map((item) => (
              <div
                key={`${item.name}${item.gender}${item.age}`}
                className="flex justify-between px-5 py-4 cursor-pointer"
                style={{
                  backgroundColor:
                    patientContext.patient?.name == item.name ? "#D8FCF7" : ""
                }}
                onClick={() => {
                  patientContext.setPatient(item)
                }}
              >
                <PatientItem {...item} />
                <Image
                  src="/icon/three-dots.svg"
                  alt="setting"
                  width={3.7}
                  height={18}
                  className="rotate-90 mr-5"
                />
              </div>
            ))}
          </section>
        </>
      )}
    </div>
  )
}

export default memo(PatientList)
