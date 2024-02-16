import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'createDoctor' : ActorMethod<[{ 'name' : string }], string>,
  'deleteDoctor' : ActorMethod<
    [string],
    {
        'Ok' : {
          'id' : string,
          'name' : string,
          'createdAt' : bigint,
          'updatedAt' : [] | [bigint],
        }
      } |
      { 'Err' : { 'NotFound' : string } | { 'Unexpected' : string } }
  >,
  'getDoctor' : ActorMethod<
    [string],
    {
        'Ok' : {
          'id' : string,
          'name' : string,
          'createdAt' : bigint,
          'updatedAt' : [] | [bigint],
        }
      } |
      { 'Err' : { 'NotFound' : string } | { 'Unexpected' : string } }
  >,
  'getDoctors' : ActorMethod<
    [],
    {
        'Ok' : Array<
          {
            'id' : string,
            'name' : string,
            'createdAt' : bigint,
            'updatedAt' : [] | [bigint],
          }
        >
      } |
      { 'Err' : { 'NotFound' : string } | { 'Unexpected' : string } }
  >,
  'updateDoctor' : ActorMethod<[string, { 'name' : string }], string>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: ({ IDL }: { IDL: IDL }) => IDL.Type[];
