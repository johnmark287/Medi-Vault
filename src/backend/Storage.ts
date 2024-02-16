import { Principal, StableBTreeMap, text } from "azle";
import { doctorType, patientType, treatmentType } from "./types";

const DoctorStorage = StableBTreeMap<Principal, doctorType>(0);
const PatientStorage = StableBTreeMap<Principal, patientType>(1);
const TreatmentStorage = StableBTreeMap<Principal, treatmentType>(2);

export { DoctorStorage, PatientStorage, TreatmentStorage };
