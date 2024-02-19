import { Canister, Err, ic, None, Ok, query, Result, Some, text, update, Vec } from 'azle';
import { v4 as uuidv4 } from "uuid";
import { Doctor, CustomError } from './Entities';
import { DoctorStorage } from './Storage';
import { DoctorPayload } from './Payloads';


export default Canister({
    getDoctor: query([text], Result(Doctor, CustomError), (id) => {
        const doctorOpt = DoctorStorage.get(id);
        if ("None" in doctorOpt) {
            return Err({ NotFound: "Not Found!" });
        }
        return Ok(doctorOpt.Some);
    }),
    createDoctor: update([DoctorPayload], text, (payload) => {
        const doctor = {
            id: uuidv4(),
            createdAt: ic.time(),
            updatedAt: None,
            ...payload
        }
        DoctorStorage.insert(doctor.id, doctor);
        return doctor.id;
    }),
    updateDoctor: update([text, DoctorPayload], Result(Doctor, CustomError), (id, payload) => {
        const doctorOpt = DoctorStorage.get(id);
        if ("None" in doctorOpt) {
            return Err({ NotFound: `Cannot update the doctor: Doctor with id=${id} not found` });
        }
        const updatedDoctor = {
            ...doctorOpt.Some,
            ...payload,
            updatedAt: Some(ic.time())
        }
        DoctorStorage.insert(doctorOpt.Some.id, updatedDoctor);
        return Ok(updatedDoctor);
    }),
    getDoctors: query([], Result(Vec(Doctor), CustomError), () => {
        try {
            return Ok(DoctorStorage.values());
        } catch (e: any) {
            return Err({ Unexpected: e.error });
        }
    }),
    deleteDoctor: update([text], Result(Doctor, CustomError), (id) => {
        const deletedDoctor = DoctorStorage.remove(id);
        if ("None" in deletedDoctor) {
            return Err({ NotFound: `Couldn't delete a doctor with id=${id}. Doctor not found` });
        }
        return Ok(deletedDoctor.Some);
    }),
});
