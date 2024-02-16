import { CustomError, Doctor, Patient, Treatment } from "./Entities";

type doctorType = typeof Doctor.tsType;
type patientType = typeof Patient.tsType;
type treatmentType = typeof Treatment.tsType;
type customErrorType = typeof CustomError.tsType;


export { doctorType, patientType, treatmentType, customErrorType };
