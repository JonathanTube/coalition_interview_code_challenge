export type LV = {
  levels: string
  value: number
}

export type bloodPressure = {
  diastolic: LV
  systolic: LV
}
export type Patient = {
  name: string
  gender: string
  age: number
  date_of_birth: string
  profile_picture: string
  emergency_contact: string
  phone_number: string
  insurance_type: string
  diagnosis_history: diagnosisHistoryItem[]
  diagnostic_list: diagnosticListItem[]
  lab_results: string[]
}

export type diagnosisHistoryItem = {
  year: number
  month: string
  blood_pressure: bloodPressure
  respiratory_rate: LV
  temperature: LV
  heart_rate: LV
}

export type diagnosticListItem = {
  name: string
  status: string
  description: string
}
