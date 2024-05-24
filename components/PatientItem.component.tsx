import Image from "next/image"
import { Patient } from "types/Patient.d"

const PatientItem: React.FC<Patient> = ({
  name,
  profile_picture,
  gender,
  age
}) => {
  return (
    <div className="flex">
      <Image
        src={profile_picture}
        alt="avatar"
        width={48}
        height={48}
        className="rounded-full"
      />
      <div className="ml-3">
        <div className="text-primary font-semibold text-sm mt-1">{name}</div>
        <div className="text-gray-500 text-sm mt-1">
          <span>{gender}</span>
          <span>, {age}</span>
        </div>
      </div>
    </div>
  )
}

export default PatientItem
