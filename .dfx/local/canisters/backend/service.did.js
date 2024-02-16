export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'createDoctor' : IDL.Func(
        [IDL.Record({ 'name' : IDL.Text })],
        [IDL.Text],
        [],
      ),
    'deleteDoctor' : IDL.Func(
        [IDL.Text],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Text,
              'name' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'updatedAt' : IDL.Opt(IDL.Nat64),
            }),
            'Err' : IDL.Variant({
              'NotFound' : IDL.Text,
              'Unexpected' : IDL.Text,
            }),
          }),
        ],
        [],
      ),
    'getDoctor' : IDL.Func(
        [IDL.Text],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Text,
              'name' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'updatedAt' : IDL.Opt(IDL.Nat64),
            }),
            'Err' : IDL.Variant({
              'NotFound' : IDL.Text,
              'Unexpected' : IDL.Text,
            }),
          }),
        ],
        ['query'],
      ),
    'getDoctors' : IDL.Func(
        [],
        [
          IDL.Variant({
            'Ok' : IDL.Vec(
              IDL.Record({
                'id' : IDL.Text,
                'name' : IDL.Text,
                'createdAt' : IDL.Nat64,
                'updatedAt' : IDL.Opt(IDL.Nat64),
              })
            ),
            'Err' : IDL.Variant({
              'NotFound' : IDL.Text,
              'Unexpected' : IDL.Text,
            }),
          }),
        ],
        ['query'],
      ),
    'updateDoctor' : IDL.Func(
        [IDL.Text, IDL.Record({ 'name' : IDL.Text })],
        [IDL.Text],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
