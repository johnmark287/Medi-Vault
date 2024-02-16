import { Record, text, nat64, Opt, Principal, Variant } from "azle";

const Doctor = Record({
  id: Principal,
  name: text,
  createdAt: nat64,
  updatedAt: Opt(nat64),
});

type Doctor = typeof Doctor.tsType;


const Patient = Record({
  id: Principal,
  name: text,
  createdAt: nat64,
  updatedAt: Opt(nat64),
});

const Treatment = Record({
  id: Principal,
  name: text,
  desc: text,
  results: text,
  doctorId: Principal,
  patientId: Principal,
  createdAt: nat64,
  updatedAt: Opt(nat64),
});

const CustomError = Variant({
  NotFound: text,
  Unexpected: text,
});

export { Doctor, Patient, Treatment, CustomError };
