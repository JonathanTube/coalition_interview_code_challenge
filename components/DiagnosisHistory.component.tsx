"use client"
import Image from "next/image"
import React, { useCallback, useContext } from "react"
import HistoryContext from "store/history.context"
import PatientContext from "store/patient.context"

import DiagnosisChart from "./DiagnosisChart.component"
import DiagnosisDetails from "./DiagnosisDetails.component"
import DiagnosisSystolicDiastolic from "./DiagnosisSystolicDiastolic.component"

const DiagnosisHistory: React.FC = () => {
  const historyContext = useContext(HistoryContext)
  const patientContext = useContext(PatientContext)
  const { patient } = patientContext

  const histories = patient?.diagnosis_history.slice(0, 6).reverse() || []
  const history = histories[historyContext.index]

  const callbackHandler = useCallback((idx: number) => {
    historyContext.setIndex(idx)
  }, [])

  return (
    <div className="bg-white p-5 rounded-2xl h-[673px]">
      <h1 className="text-2xl font-extrabold">Diagnosis History</h1>

      <div className="h-[298px] bg-[#F4F0FE] rounded-xl mb-5 mt-10 p-4 box-border flex justify-between overflow-hidden">
        <div className="flex-grow flex-shrink">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Blood Pressure</h2>
            <div className="text-sm text-gray-500 mt-2 flex items-center pr-9 cursor-pointer">
              <div className="mr-4">Last 6 months</div>
              <Image
                src="/icon/arrow-down.svg"
                alt="arrow_down"
                width={10}
                height={6}
              />
            </div>
          </div>
          <div className="w-full h-[220px] mt-5">
            <DiagnosisChart histories={histories} callback={callbackHandler} />
          </div>
        </div>

        <div className="w-52 flex-grow-0 flex-shrink-0 ml-4">
          {history && (
            <DiagnosisSystolicDiastolic {...history.blood_pressure} />
          )}
        </div>
      </div>

      <DiagnosisDetails {...history} />
    </div>
  )
}

export default DiagnosisHistory
