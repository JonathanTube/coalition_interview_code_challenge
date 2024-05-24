"use client"
import React, { memo } from "react"
import DiagnosisHistoryItem from "./DiagnosisItem.component"
import { LV } from "types/Patient.d"

type Props = {
  respiratory_rate: LV
  temperature: LV
  heart_rate: LV
}

const DiagnosisDetails: React.FC<Props> = ({
  respiratory_rate,
  temperature,
  heart_rate
}) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <DiagnosisHistoryItem
        title="Respiratory Rate"
        img="/icon/respiratory-rate.svg"
        bgColor="#E0F3FA"
        levels={respiratory_rate?.levels}
        value={respiratory_rate?.value}
      />

      <DiagnosisHistoryItem
        title="Temperature"
        img="/icon/temperature.svg"
        bgColor="#FFE6E9"
        levels={temperature?.levels}
        value={temperature?.value}
      />

      <DiagnosisHistoryItem
        title="Heart Rate"
        img="/icon/HeartBPM.svg"
        bgColor="#FFE6F1"
        levels={heart_rate?.levels}
        value={heart_rate?.value}
      />
    </div>
  )
}

export default memo(DiagnosisDetails)
