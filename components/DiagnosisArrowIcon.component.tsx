"use client"
import Image from "next/image"
import React, { memo } from "react"

type Props = {
  levels: string
}
const DiagnosisArrowIcon: React.FC<Props> = ({ levels }) => {
  if (levels === "Higher than Average") {
    return (
      <Image
        alt="arrow-up-fill.svg"
        src="/icon/arrow-up-fill.svg"
        width={0}
        height={0}
        style={{ width: "10px", height: "5px" }}
      />
    )
  }
  if (levels === "Lower than Average") {
    return (
      <Image
        alt="arrow-down-fill.svg"
        src="/icon/arrow-down-fill.svg"
        width={0}
        height={0}
        style={{ width: "10px", height: "5px" }}
      />
    )
  }
  return <></>
}

export default memo(DiagnosisArrowIcon)
