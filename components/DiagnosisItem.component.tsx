"use client"
import Image from "next/image"
import DiagnosisArrowIcon from "./DiagnosisArrowIcon.component"

type Props = {
  title: string
  levels?: string
  value?: number
  img: string
  bgColor?: string
}
const DiagnosisHistoryItem: React.FC<Props> = ({
  title = "-",
  img,
  levels = "-",
  value = 0,
  bgColor
}) => {
  return (
    <>
      <div
        className="h-[242px] rounded-xl p-4 flex flex-col justify-between"
        style={{ backgroundColor: bgColor }}
      >
        <Image src={img} alt={title} width={96} height={96} />
        <div>
          <div className="text-base mt-4 font-semibold">{title}</div>
          <div className="text-3xl font-extrabold">
            {value}
            <span>&nbsp;bpm</span>
          </div>
        </div>
        <div className="mt-2 text-sm flex items-center">
          <DiagnosisArrowIcon levels={levels} />
          <div className="ml-2">{levels}</div>
        </div>
      </div>
    </>
  )
}

export default DiagnosisHistoryItem
