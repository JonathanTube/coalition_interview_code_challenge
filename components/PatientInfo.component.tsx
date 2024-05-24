"use client"
import React, { memo } from "react"
import { Patient } from "types/Patient.d"

type Props = {
  patient: Patient | undefined
}

const PatientInfo: React.FC<Props> = ({ patient }) => {
  if (!patient) {
    return <div></div>
  }

  const itemList = [
    {
      label: "Date Of Birth",
      value: patient?.date_of_birth,
      icon: "/icon/birth.svg"
    },
    {
      label: "Gender",
      value: patient?.gender,
      icon: "/icon/gender.svg"
    },
    {
      label: "Contact Info.",
      value: patient?.phone_number,
      icon: "/icon/phone.svg"
    },
    {
      label: "Emergency Contacts",
      value: patient?.emergency_contact,
      icon: "/icon/phone.svg"
    },
    {
      label: "Insurancce Provider",
      value: patient?.insurance_type,
      icon: "/icon/insurance.svg"
    }
  ]

  return (
    <div className="py-8 rounded-2xl bg-white flex flex-col h-[730px] box-border">
      <div className="text-center w-full flex justify-center">
        {patient?.profile_picture && (
          <img
            src={patient?.profile_picture}
            alt="avatar"
            width={200}
            height={200}
            className="rounded-full"
          />
        )}
      </div>
      <h1 className="text-2xl font-extrabold mt-6 text-center">
        {patient?.name}
      </h1>
      <ul className="pl-5 text-sm">
        {itemList.map((item) => (
          <li key={item.label} className="flex items-center mt-6">
            <img
              src={item.icon}
              alt={item.icon}
              width={42}
              height={42}
              className="rounded-full"
            />
            <div className="ml-4">
              <div>{item.label}</div>
              <strong>{item.value}</strong>
            </div>
          </li>
        ))}
      </ul>
      <input
        type="button"
        value="Show All Information"
        className="w-55 h-10 text-sm bg-active rounded-full mt-10 hover:bg-opacity-60 mx-auto"
      />
    </div>
  )
}

export default memo(PatientInfo)
