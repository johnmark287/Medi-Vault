import { Record, text, nat64, Opt, Principal, Variant } from "azle";

const Doctor = Record({
  id: text,
  name: text,
  createdAt: nat64,
  updatedAt: Opt(nat64),
});

const Patient = Record({
  id: text,
  name: text,
  createdAt: nat64,
  updatedAt: Opt(nat64),
});

const Treatment = Record({
  id: text,
  name: text,
  desc: text,
  results: text,
  doctor: Principal,
  patient: Principal,
  createdAt: nat64,
  updatedAt: Opt(nat64),
});

const CustomError = Variant({
  NotFound: text,
  Unexpected: text,
});

export { Doctor, Patient, Treatment, CustomError };
