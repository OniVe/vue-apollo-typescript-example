/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CarQueryVariables = {
  id: string,
};

export type CarQuery = {
  Car:  {
    make: string | null,
    model: string | null,
    photoURL: string | null,
    price: number | null,
  } | null,
};

export type allCarsQuery = {
  allCars:  Array< {
    id: string,
    make: string | null,
    model: string | null,
    year: number | null,
  } >,
};

export type CarFieldsFragment = {
  make: string | null,
  model: string | null,
  photoURL: string | null,
  price: number | null,
};

export type allCarsFieldsFragment = {
  id: string,
  make: string | null,
  model: string | null,
  year: number | null,
};
/* tslint:enable */
