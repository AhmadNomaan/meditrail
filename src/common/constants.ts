export enum UserType {
    PATIENT = 'patient',
    DOCTOR = 'doctor',
    HOSPITAL = 'hospital',
    FACILITY = 'facility'

}



export const TrimWhitespace = (value) => {
    let trimmed_value = value.value.trim()
    return trimmed_value
}

export const TimeStamp = ()=>{
    return new Date(new Date().toUTCString())
}
