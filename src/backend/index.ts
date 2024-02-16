import { Canister, Err, ic, None, Ok, query, Result, Some, text, update, Vec, Principal } from 'azle';
import { v4 as uuidv4 } from "uuid";
import { Doctor, CustomError } from './Entities';
import { DoctorStorage } from './Storage';
import { DoctorPayload } from './Payloads';


export default Canister({
    getDoctor: query([Principal], Result(Doctor, CustomError), (id) => {
        const doctorOpt = DoctorStorage.get(id);
        if ("None" in doctorOpt) {
            return Err({ NotFound: "Not Found!" });
        }
        return Ok(doctorOpt.Some);
    }),
    createDoctor: update([DoctorPayload], Doctor, (payload) => {
        const doctor: Doctor = {
            id: Principal.fromText(uuidv4()),
            createdAt: ic.time(),
            updatedAt: None,
            ...payload
        };
        DoctorStorage.insert(doctor.id, doctor);
        return doctor;
    }),
    updateDoctor: update([Principal, DoctorPayload], Result(Doctor, CustomError), (id, payload) => {
        const doctorOpt = DoctorStorage.get(id);
        if ("None" in doctorOpt) {
            return Err({ NotFound: "Doctor not found!" });
        }
        const updatedDoctor: Doctor = {
            id: doctorOpt.Some?.id!,
            ...payload,
            createdAt: doctorOpt.Some?.createdAt!,
            updatedAt: Some(ic.time())
        };
        DoctorStorage.insert(id, updatedDoctor);
        return Ok(updatedDoctor);
    }),
    getDoctors: query([], Result(Vec(Doctor), CustomError), () => {
        try {
            return Ok(DoctorStorage.values());
        } catch (e: any) {
            return Err({ Unexpected: e.error });
        }
    }),
    deleteDoctor: update([Principal], Result(Doctor, CustomError), (id) => {
        const deletedDoctor = DoctorStorage.remove(id);
        if ("None" in deletedDoctor) {
            return Err({ NotFound: `Couldn't delete a doctor with id=${id}. Doctor not found` });
        }
        return Ok(deletedDoctor.Some);
    }),
});
