"use client"
import Image from "next/image"
import { useContext, useState } from "react"
import PatientContext from "store/patient.context"

const LabelResult: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>()
  const patientContext = useContext(PatientContext)

  return (
    <div className="bg-white p-5 rounded-2xl mt-8 h-[296px] box-border">
      <h1 className="text-2xl font-extrabold">Lab Result</h1>
      <ul className="overflow-y-auto mt-4 pr-2" style={{ height: "180px" }}>
        {patientContext.patient?.lab_results.map((item, index) => (
          <li
            key={index}
            className="flex justify-between h-10 px-4 items-center mt-1 cursor-pointer"
            style={{ backgroundColor: activeIndex === index ? "#F6F7F8" : "" }}
            onClick={() => setActiveIndex(index)}
          >
            <div className="text-sm">{item}</div>
            <div>
              <Image
                src="/icon/download.svg"
                alt="download"
                width={20}
                height={20}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default LabelResult
