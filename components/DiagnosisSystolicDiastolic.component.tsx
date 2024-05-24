"use client"
import React, { memo } from "react"
import { LV } from "types/Patient.d"
import DiagnosisArrowIcon from "./DiagnosisArrowIcon.component"

type Props = {
  diastolic: LV
  systolic: LV
}
const DiagnosisSystolicDiastolic: React.FC<Props> = ({
  diastolic,
  systolic
}) => {
  return (
    <>
      <div>
        <div className="flex items-center">
          <div className="rounded-full bg-[#E66FD2] w-3 h-3"></div>
          <h3 className="text-sm font-bold ml-1">Systolic</h3>
        </div>
        <strong className="text-[1.375rem] mt-2 leading-10">
          {systolic.value}
        </strong>

        <div className="mt-2 text-sm flex items-center">
          <DiagnosisArrowIcon levels={systolic.levels} />
          <div className="ml-2">{systolic.levels}</div>
        </div>
      </div>
      <div className="border-t border-t-gray-300 mt-4 pt-4">
        <div className="flex items-center">
          <div className="rounded-full bg-[#8C6FE6] w-3 h-3"></div>
          <h3 className="text-sm font-bold ml-1">Diastolic</h3>
        </div>
        <strong className="text-[1.375rem] leading-10">
          {diastolic?.value}
        </strong>
        <div className="mt-2 text-sm flex items-center">
          <DiagnosisArrowIcon levels={diastolic.levels} />
          <div className="ml-2">{diastolic.levels}</div>
        </div>
      </div>
    </>
  )
}

export default memo(DiagnosisSystolicDiastolic)
