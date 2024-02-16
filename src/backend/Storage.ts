import { StableBTreeMap, text } from "azle";
import { Doctor } from "./Entities";

const DoctorStorage = StableBTreeMap(0, text, Doctor);

export { DoctorStorage };
