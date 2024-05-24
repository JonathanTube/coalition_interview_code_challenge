"use client"

import React, { useContext } from "react"
import PatientContext from "store/patient.context"

const DiagnosisList: React.FC = () => {
  const patientContext = useContext(PatientContext)
  const diagnosticList = patientContext.patient?.diagnostic_list
  return (
    <div className="bg-white p-5 rounded-2xl mt-8 h-[349px]">
      <h1 className="text-2xl font-extrabold">Diagnosis List</h1>
      <div className="grid grid-cols-8 text-sm items-center font-bold h-12 mt-10 rounded-full bg-[#F6F7F8]">
        <div className="col-span-2 pl-5">Problem/Diagnosis</div>
        <div className="col-span-4">Description</div>
        <div className="col-span-2">Status</div>
      </div>

      <div className="text-sm h-48 overflow-y-auto">
        {diagnosticList?.map((item, index) => (
          <div key={index} className="grid grid-cols-8">
            <div
              className="col-span-2 pl-5 py-5"
              style={{ borderTop: index > 0 ? "1px solid #ebebeb" : "" }}
            >
              {item.name}
            </div>
            <div
              className="col-span-4 py-5"
              style={{ borderTop: index > 0 ? "1px solid #ebebeb" : "" }}
            >
              {item.description}
            </div>
            <div
              className="col-span-2 py-5"
              style={{ borderTop: index > 0 ? "1px solid #ebebeb" : "" }}
            >
              {item.status}
            </div>
          </div>
        ))}
      </div>

      {/* <tbody className="overflow-y-scroll h-44">
          {diagnosticList?.map((item, index) => (
            <tr
              className="h-14"
              style={{
                borderTop: index > 0 ? "1px solid #ccc" : ""
              }}
            >
              <td className="pl-5">{item.name}</td>
              <td className="text-nowrap whitespace-nowrap overflow-ellipsis">
                {item.description}
              </td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody> */}
    </div>
  )
}

export default DiagnosisList
