/* tslint:disable */


export type DateTime = any;

/* The &#x60;BigDecimal&#x60; scalar type represents signed fractional values with arbitrary precision. */
export type BigDecimal = any;

/* The &#x60;BigInt&#x60; scalar type represents non-fractional signed whole numeric values. BigInt can represent arbitrary big values. */
export type BigInt = any;

/* The &#x60;Long&#x60; scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
export type Long = any;
/* An object with an ID */
export interface Node {
  id: string; /* The id of the object. */
}

export interface Query {
  allCars: Car[]; 
  allFiles: File[]; 
  allUsers: User[]; 
  _allCarsMeta: _QueryMeta; 
  _allFilesMeta: _QueryMeta; 
  _allUsersMeta: _QueryMeta; 
  Car: Car | null; 
  File: File | null; 
  User: User | null; 
  user: User | null; 
  node: Node | null; /* Fetches an object given its ID */
}

export interface Car extends Node {
  createdAt: DateTime; 
  id: string; 
  make: string | null; 
  model: string | null; 
  photoURL: string | null; 
  price: number | null; 
  updatedAt: DateTime; 
  year: number | null; 
}

export interface File extends Node {
  contentType: string; 
  createdAt: DateTime; 
  id: string; 
  name: string; 
  secret: string; 
  size: number; 
  updatedAt: DateTime; 
  url: string; 
}

export interface User extends Node {
  createdAt: DateTime; 
  id: string; 
  updatedAt: DateTime; 
}
/* Meta information about the query. */
export interface _QueryMeta {
  count: number; 
}

export interface Mutation {
  createCar: Car | null; 
  createFile: File | null; 
  updateCar: Car | null; 
  updateFile: File | null; 
  updateUser: User | null; 
  updateOrCreateCar: Car | null; 
  updateOrCreateFile: File | null; 
  updateOrCreateUser: User | null; 
  deleteCar: Car | null; 
  deleteFile: File | null; 
  deleteUser: User | null; 
  createUser: User | null; 
}

export interface Subscription {
  Car: CarSubscriptionPayload | null; 
  File: FileSubscriptionPayload | null; 
  User: UserSubscriptionPayload | null; 
}

export interface CarSubscriptionPayload {
  mutation: _ModelMutationType; 
  node: Car | null; 
  updatedFields: string[]; 
  previousValues: CarPreviousValues | null; 
}

export interface CarPreviousValues {
  createdAt: DateTime; 
  id: string; 
  make: string | null; 
  model: string | null; 
  photoURL: string | null; 
  price: number | null; 
  updatedAt: DateTime; 
  year: number | null; 
}

export interface FileSubscriptionPayload {
  mutation: _ModelMutationType; 
  node: File | null; 
  updatedFields: string[]; 
  previousValues: FilePreviousValues | null; 
}

export interface FilePreviousValues {
  contentType: string; 
  createdAt: DateTime; 
  id: string; 
  name: string; 
  secret: string; 
  size: number; 
  updatedAt: DateTime; 
  url: string; 
}

export interface UserSubscriptionPayload {
  mutation: _ModelMutationType; 
  node: User | null; 
  updatedFields: string[]; 
  previousValues: UserPreviousValues | null; 
}

export interface UserPreviousValues {
  createdAt: DateTime; 
  id: string; 
  updatedAt: DateTime; 
}

export interface CarFilter {
  AND: CarFilter[]; /* Logical AND on all given filters. */
  OR: CarFilter[]; /* Logical OR on all given filters. */
  createdAt: DateTime | null; 
  createdAt_not: DateTime | null; /* All values that are not equal to given value. */
  createdAt_in: DateTime[]; /* All values that are contained in given list. */
  createdAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  createdAt_lt: DateTime | null; /* All values less than the given value. */
  createdAt_lte: DateTime | null; /* All values less than or equal the given value. */
  createdAt_gt: DateTime | null; /* All values greater than the given value. */
  createdAt_gte: DateTime | null; /* All values greater than or equal the given value. */
  id: string | null; 
  id_not: string | null; /* All values that are not equal to given value. */
  id_in: string[]; /* All values that are contained in given list. */
  id_not_in: string[]; /* All values that are not contained in given list. */
  id_lt: string | null; /* All values less than the given value. */
  id_lte: string | null; /* All values less than or equal the given value. */
  id_gt: string | null; /* All values greater than the given value. */
  id_gte: string | null; /* All values greater than or equal the given value. */
  id_contains: string | null; /* All values containing the given string. */
  id_not_contains: string | null; /* All values not containing the given string. */
  id_starts_with: string | null; /* All values starting with the given string. */
  id_not_starts_with: string | null; /* All values not starting with the given string. */
  id_ends_with: string | null; /* All values ending with the given string. */
  id_not_ends_with: string | null; /* All values not ending with the given string. */
  make: string | null; 
  make_not: string | null; /* All values that are not equal to given value. */
  make_in: string[]; /* All values that are contained in given list. */
  make_not_in: string[]; /* All values that are not contained in given list. */
  make_lt: string | null; /* All values less than the given value. */
  make_lte: string | null; /* All values less than or equal the given value. */
  make_gt: string | null; /* All values greater than the given value. */
  make_gte: string | null; /* All values greater than or equal the given value. */
  make_contains: string | null; /* All values containing the given string. */
  make_not_contains: string | null; /* All values not containing the given string. */
  make_starts_with: string | null; /* All values starting with the given string. */
  make_not_starts_with: string | null; /* All values not starting with the given string. */
  make_ends_with: string | null; /* All values ending with the given string. */
  make_not_ends_with: string | null; /* All values not ending with the given string. */
  model: string | null; 
  model_not: string | null; /* All values that are not equal to given value. */
  model_in: string[]; /* All values that are contained in given list. */
  model_not_in: string[]; /* All values that are not contained in given list. */
  model_lt: string | null; /* All values less than the given value. */
  model_lte: string | null; /* All values less than or equal the given value. */
  model_gt: string | null; /* All values greater than the given value. */
  model_gte: string | null; /* All values greater than or equal the given value. */
  model_contains: string | null; /* All values containing the given string. */
  model_not_contains: string | null; /* All values not containing the given string. */
  model_starts_with: string | null; /* All values starting with the given string. */
  model_not_starts_with: string | null; /* All values not starting with the given string. */
  model_ends_with: string | null; /* All values ending with the given string. */
  model_not_ends_with: string | null; /* All values not ending with the given string. */
  photoURL: string | null; 
  photoURL_not: string | null; /* All values that are not equal to given value. */
  photoURL_in: string[]; /* All values that are contained in given list. */
  photoURL_not_in: string[]; /* All values that are not contained in given list. */
  photoURL_lt: string | null; /* All values less than the given value. */
  photoURL_lte: string | null; /* All values less than or equal the given value. */
  photoURL_gt: string | null; /* All values greater than the given value. */
  photoURL_gte: string | null; /* All values greater than or equal the given value. */
  photoURL_contains: string | null; /* All values containing the given string. */
  photoURL_not_contains: string | null; /* All values not containing the given string. */
  photoURL_starts_with: string | null; /* All values starting with the given string. */
  photoURL_not_starts_with: string | null; /* All values not starting with the given string. */
  photoURL_ends_with: string | null; /* All values ending with the given string. */
  photoURL_not_ends_with: string | null; /* All values not ending with the given string. */
  price: number | null; 
  price_not: number | null; /* All values that are not equal to given value. */
  price_in: number[]; /* All values that are contained in given list. */
  price_not_in: number[]; /* All values that are not contained in given list. */
  price_lt: number | null; /* All values less than the given value. */
  price_lte: number | null; /* All values less than or equal the given value. */
  price_gt: number | null; /* All values greater than the given value. */
  price_gte: number | null; /* All values greater than or equal the given value. */
  updatedAt: DateTime | null; 
  updatedAt_not: DateTime | null; /* All values that are not equal to given value. */
  updatedAt_in: DateTime[]; /* All values that are contained in given list. */
  updatedAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  updatedAt_lt: DateTime | null; /* All values less than the given value. */
  updatedAt_lte: DateTime | null; /* All values less than or equal the given value. */
  updatedAt_gt: DateTime | null; /* All values greater than the given value. */
  updatedAt_gte: DateTime | null; /* All values greater than or equal the given value. */
  year: number | null; 
  year_not: number | null; /* All values that are not equal to given value. */
  year_in: number[]; /* All values that are contained in given list. */
  year_not_in: number[]; /* All values that are not contained in given list. */
  year_lt: number | null; /* All values less than the given value. */
  year_lte: number | null; /* All values less than or equal the given value. */
  year_gt: number | null; /* All values greater than the given value. */
  year_gte: number | null; /* All values greater than or equal the given value. */
}

export interface FileFilter {
  AND: FileFilter[]; /* Logical AND on all given filters. */
  OR: FileFilter[]; /* Logical OR on all given filters. */
  contentType: string | null; 
  contentType_not: string | null; /* All values that are not equal to given value. */
  contentType_in: string[]; /* All values that are contained in given list. */
  contentType_not_in: string[]; /* All values that are not contained in given list. */
  contentType_lt: string | null; /* All values less than the given value. */
  contentType_lte: string | null; /* All values less than or equal the given value. */
  contentType_gt: string | null; /* All values greater than the given value. */
  contentType_gte: string | null; /* All values greater than or equal the given value. */
  contentType_contains: string | null; /* All values containing the given string. */
  contentType_not_contains: string | null; /* All values not containing the given string. */
  contentType_starts_with: string | null; /* All values starting with the given string. */
  contentType_not_starts_with: string | null; /* All values not starting with the given string. */
  contentType_ends_with: string | null; /* All values ending with the given string. */
  contentType_not_ends_with: string | null; /* All values not ending with the given string. */
  createdAt: DateTime | null; 
  createdAt_not: DateTime | null; /* All values that are not equal to given value. */
  createdAt_in: DateTime[]; /* All values that are contained in given list. */
  createdAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  createdAt_lt: DateTime | null; /* All values less than the given value. */
  createdAt_lte: DateTime | null; /* All values less than or equal the given value. */
  createdAt_gt: DateTime | null; /* All values greater than the given value. */
  createdAt_gte: DateTime | null; /* All values greater than or equal the given value. */
  id: string | null; 
  id_not: string | null; /* All values that are not equal to given value. */
  id_in: string[]; /* All values that are contained in given list. */
  id_not_in: string[]; /* All values that are not contained in given list. */
  id_lt: string | null; /* All values less than the given value. */
  id_lte: string | null; /* All values less than or equal the given value. */
  id_gt: string | null; /* All values greater than the given value. */
  id_gte: string | null; /* All values greater than or equal the given value. */
  id_contains: string | null; /* All values containing the given string. */
  id_not_contains: string | null; /* All values not containing the given string. */
  id_starts_with: string | null; /* All values starting with the given string. */
  id_not_starts_with: string | null; /* All values not starting with the given string. */
  id_ends_with: string | null; /* All values ending with the given string. */
  id_not_ends_with: string | null; /* All values not ending with the given string. */
  name: string | null; 
  name_not: string | null; /* All values that are not equal to given value. */
  name_in: string[]; /* All values that are contained in given list. */
  name_not_in: string[]; /* All values that are not contained in given list. */
  name_lt: string | null; /* All values less than the given value. */
  name_lte: string | null; /* All values less than or equal the given value. */
  name_gt: string | null; /* All values greater than the given value. */
  name_gte: string | null; /* All values greater than or equal the given value. */
  name_contains: string | null; /* All values containing the given string. */
  name_not_contains: string | null; /* All values not containing the given string. */
  name_starts_with: string | null; /* All values starting with the given string. */
  name_not_starts_with: string | null; /* All values not starting with the given string. */
  name_ends_with: string | null; /* All values ending with the given string. */
  name_not_ends_with: string | null; /* All values not ending with the given string. */
  secret: string | null; 
  secret_not: string | null; /* All values that are not equal to given value. */
  secret_in: string[]; /* All values that are contained in given list. */
  secret_not_in: string[]; /* All values that are not contained in given list. */
  secret_lt: string | null; /* All values less than the given value. */
  secret_lte: string | null; /* All values less than or equal the given value. */
  secret_gt: string | null; /* All values greater than the given value. */
  secret_gte: string | null; /* All values greater than or equal the given value. */
  secret_contains: string | null; /* All values containing the given string. */
  secret_not_contains: string | null; /* All values not containing the given string. */
  secret_starts_with: string | null; /* All values starting with the given string. */
  secret_not_starts_with: string | null; /* All values not starting with the given string. */
  secret_ends_with: string | null; /* All values ending with the given string. */
  secret_not_ends_with: string | null; /* All values not ending with the given string. */
  size: number | null; 
  size_not: number | null; /* All values that are not equal to given value. */
  size_in: number[]; /* All values that are contained in given list. */
  size_not_in: number[]; /* All values that are not contained in given list. */
  size_lt: number | null; /* All values less than the given value. */
  size_lte: number | null; /* All values less than or equal the given value. */
  size_gt: number | null; /* All values greater than the given value. */
  size_gte: number | null; /* All values greater than or equal the given value. */
  updatedAt: DateTime | null; 
  updatedAt_not: DateTime | null; /* All values that are not equal to given value. */
  updatedAt_in: DateTime[]; /* All values that are contained in given list. */
  updatedAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  updatedAt_lt: DateTime | null; /* All values less than the given value. */
  updatedAt_lte: DateTime | null; /* All values less than or equal the given value. */
  updatedAt_gt: DateTime | null; /* All values greater than the given value. */
  updatedAt_gte: DateTime | null; /* All values greater than or equal the given value. */
  url: string | null; 
  url_not: string | null; /* All values that are not equal to given value. */
  url_in: string[]; /* All values that are contained in given list. */
  url_not_in: string[]; /* All values that are not contained in given list. */
  url_lt: string | null; /* All values less than the given value. */
  url_lte: string | null; /* All values less than or equal the given value. */
  url_gt: string | null; /* All values greater than the given value. */
  url_gte: string | null; /* All values greater than or equal the given value. */
  url_contains: string | null; /* All values containing the given string. */
  url_not_contains: string | null; /* All values not containing the given string. */
  url_starts_with: string | null; /* All values starting with the given string. */
  url_not_starts_with: string | null; /* All values not starting with the given string. */
  url_ends_with: string | null; /* All values ending with the given string. */
  url_not_ends_with: string | null; /* All values not ending with the given string. */
}

export interface UserFilter {
  AND: UserFilter[]; /* Logical AND on all given filters. */
  OR: UserFilter[]; /* Logical OR on all given filters. */
  createdAt: DateTime | null; 
  createdAt_not: DateTime | null; /* All values that are not equal to given value. */
  createdAt_in: DateTime[]; /* All values that are contained in given list. */
  createdAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  createdAt_lt: DateTime | null; /* All values less than the given value. */
  createdAt_lte: DateTime | null; /* All values less than or equal the given value. */
  createdAt_gt: DateTime | null; /* All values greater than the given value. */
  createdAt_gte: DateTime | null; /* All values greater than or equal the given value. */
  id: string | null; 
  id_not: string | null; /* All values that are not equal to given value. */
  id_in: string[]; /* All values that are contained in given list. */
  id_not_in: string[]; /* All values that are not contained in given list. */
  id_lt: string | null; /* All values less than the given value. */
  id_lte: string | null; /* All values less than or equal the given value. */
  id_gt: string | null; /* All values greater than the given value. */
  id_gte: string | null; /* All values greater than or equal the given value. */
  id_contains: string | null; /* All values containing the given string. */
  id_not_contains: string | null; /* All values not containing the given string. */
  id_starts_with: string | null; /* All values starting with the given string. */
  id_not_starts_with: string | null; /* All values not starting with the given string. */
  id_ends_with: string | null; /* All values ending with the given string. */
  id_not_ends_with: string | null; /* All values not ending with the given string. */
  updatedAt: DateTime | null; 
  updatedAt_not: DateTime | null; /* All values that are not equal to given value. */
  updatedAt_in: DateTime[]; /* All values that are contained in given list. */
  updatedAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  updatedAt_lt: DateTime | null; /* All values less than the given value. */
  updatedAt_lte: DateTime | null; /* All values less than or equal the given value. */
  updatedAt_gt: DateTime | null; /* All values greater than the given value. */
  updatedAt_gte: DateTime | null; /* All values greater than or equal the given value. */
}

export interface UpdateCar {
  id: string; 
  make: string | null; 
  model: string | null; 
  photoURL: string | null; 
  price: number | null; 
  year: number | null; 
}

export interface CreateCar {
  make: string | null; 
  model: string | null; 
  photoURL: string | null; 
  price: number | null; 
  year: number | null; 
}

export interface UpdateFile {
  id: string; 
  name: string | null; 
}

export interface CreateFile {
  name: string; 
}

export interface UpdateUser {
  id: string; 
}

export interface CarSubscriptionFilter {
  AND: CarSubscriptionFilter[]; /* Logical AND on all given filters. */
  OR: CarSubscriptionFilter[]; /* Logical OR on all given filters. */
  mutation_in: _ModelMutationType[]; /* The subscription event gets dispatched when it&#x27;s listed in mutation_in */
  updatedFields_contains: string | null; /* The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains_every: string[]; /* The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_some: string[]; /* The subscription event gets only dispatched when some of the field names included in this list have been updated */
  node: CarSubscriptionFilterNode | null; 
}

export interface CarSubscriptionFilterNode {
  createdAt: DateTime | null; 
  createdAt_not: DateTime | null; /* All values that are not equal to given value. */
  createdAt_in: DateTime[]; /* All values that are contained in given list. */
  createdAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  createdAt_lt: DateTime | null; /* All values less than the given value. */
  createdAt_lte: DateTime | null; /* All values less than or equal the given value. */
  createdAt_gt: DateTime | null; /* All values greater than the given value. */
  createdAt_gte: DateTime | null; /* All values greater than or equal the given value. */
  id: string | null; 
  id_not: string | null; /* All values that are not equal to given value. */
  id_in: string[]; /* All values that are contained in given list. */
  id_not_in: string[]; /* All values that are not contained in given list. */
  id_lt: string | null; /* All values less than the given value. */
  id_lte: string | null; /* All values less than or equal the given value. */
  id_gt: string | null; /* All values greater than the given value. */
  id_gte: string | null; /* All values greater than or equal the given value. */
  id_contains: string | null; /* All values containing the given string. */
  id_not_contains: string | null; /* All values not containing the given string. */
  id_starts_with: string | null; /* All values starting with the given string. */
  id_not_starts_with: string | null; /* All values not starting with the given string. */
  id_ends_with: string | null; /* All values ending with the given string. */
  id_not_ends_with: string | null; /* All values not ending with the given string. */
  make: string | null; 
  make_not: string | null; /* All values that are not equal to given value. */
  make_in: string[]; /* All values that are contained in given list. */
  make_not_in: string[]; /* All values that are not contained in given list. */
  make_lt: string | null; /* All values less than the given value. */
  make_lte: string | null; /* All values less than or equal the given value. */
  make_gt: string | null; /* All values greater than the given value. */
  make_gte: string | null; /* All values greater than or equal the given value. */
  make_contains: string | null; /* All values containing the given string. */
  make_not_contains: string | null; /* All values not containing the given string. */
  make_starts_with: string | null; /* All values starting with the given string. */
  make_not_starts_with: string | null; /* All values not starting with the given string. */
  make_ends_with: string | null; /* All values ending with the given string. */
  make_not_ends_with: string | null; /* All values not ending with the given string. */
  model: string | null; 
  model_not: string | null; /* All values that are not equal to given value. */
  model_in: string[]; /* All values that are contained in given list. */
  model_not_in: string[]; /* All values that are not contained in given list. */
  model_lt: string | null; /* All values less than the given value. */
  model_lte: string | null; /* All values less than or equal the given value. */
  model_gt: string | null; /* All values greater than the given value. */
  model_gte: string | null; /* All values greater than or equal the given value. */
  model_contains: string | null; /* All values containing the given string. */
  model_not_contains: string | null; /* All values not containing the given string. */
  model_starts_with: string | null; /* All values starting with the given string. */
  model_not_starts_with: string | null; /* All values not starting with the given string. */
  model_ends_with: string | null; /* All values ending with the given string. */
  model_not_ends_with: string | null; /* All values not ending with the given string. */
  photoURL: string | null; 
  photoURL_not: string | null; /* All values that are not equal to given value. */
  photoURL_in: string[]; /* All values that are contained in given list. */
  photoURL_not_in: string[]; /* All values that are not contained in given list. */
  photoURL_lt: string | null; /* All values less than the given value. */
  photoURL_lte: string | null; /* All values less than or equal the given value. */
  photoURL_gt: string | null; /* All values greater than the given value. */
  photoURL_gte: string | null; /* All values greater than or equal the given value. */
  photoURL_contains: string | null; /* All values containing the given string. */
  photoURL_not_contains: string | null; /* All values not containing the given string. */
  photoURL_starts_with: string | null; /* All values starting with the given string. */
  photoURL_not_starts_with: string | null; /* All values not starting with the given string. */
  photoURL_ends_with: string | null; /* All values ending with the given string. */
  photoURL_not_ends_with: string | null; /* All values not ending with the given string. */
  price: number | null; 
  price_not: number | null; /* All values that are not equal to given value. */
  price_in: number[]; /* All values that are contained in given list. */
  price_not_in: number[]; /* All values that are not contained in given list. */
  price_lt: number | null; /* All values less than the given value. */
  price_lte: number | null; /* All values less than or equal the given value. */
  price_gt: number | null; /* All values greater than the given value. */
  price_gte: number | null; /* All values greater than or equal the given value. */
  updatedAt: DateTime | null; 
  updatedAt_not: DateTime | null; /* All values that are not equal to given value. */
  updatedAt_in: DateTime[]; /* All values that are contained in given list. */
  updatedAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  updatedAt_lt: DateTime | null; /* All values less than the given value. */
  updatedAt_lte: DateTime | null; /* All values less than or equal the given value. */
  updatedAt_gt: DateTime | null; /* All values greater than the given value. */
  updatedAt_gte: DateTime | null; /* All values greater than or equal the given value. */
  year: number | null; 
  year_not: number | null; /* All values that are not equal to given value. */
  year_in: number[]; /* All values that are contained in given list. */
  year_not_in: number[]; /* All values that are not contained in given list. */
  year_lt: number | null; /* All values less than the given value. */
  year_lte: number | null; /* All values less than or equal the given value. */
  year_gt: number | null; /* All values greater than the given value. */
  year_gte: number | null; /* All values greater than or equal the given value. */
}

export interface FileSubscriptionFilter {
  AND: FileSubscriptionFilter[]; /* Logical AND on all given filters. */
  OR: FileSubscriptionFilter[]; /* Logical OR on all given filters. */
  mutation_in: _ModelMutationType[]; /* The subscription event gets dispatched when it&#x27;s listed in mutation_in */
  updatedFields_contains: string | null; /* The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains_every: string[]; /* The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_some: string[]; /* The subscription event gets only dispatched when some of the field names included in this list have been updated */
  node: FileSubscriptionFilterNode | null; 
}

export interface FileSubscriptionFilterNode {
  contentType: string | null; 
  contentType_not: string | null; /* All values that are not equal to given value. */
  contentType_in: string[]; /* All values that are contained in given list. */
  contentType_not_in: string[]; /* All values that are not contained in given list. */
  contentType_lt: string | null; /* All values less than the given value. */
  contentType_lte: string | null; /* All values less than or equal the given value. */
  contentType_gt: string | null; /* All values greater than the given value. */
  contentType_gte: string | null; /* All values greater than or equal the given value. */
  contentType_contains: string | null; /* All values containing the given string. */
  contentType_not_contains: string | null; /* All values not containing the given string. */
  contentType_starts_with: string | null; /* All values starting with the given string. */
  contentType_not_starts_with: string | null; /* All values not starting with the given string. */
  contentType_ends_with: string | null; /* All values ending with the given string. */
  contentType_not_ends_with: string | null; /* All values not ending with the given string. */
  createdAt: DateTime | null; 
  createdAt_not: DateTime | null; /* All values that are not equal to given value. */
  createdAt_in: DateTime[]; /* All values that are contained in given list. */
  createdAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  createdAt_lt: DateTime | null; /* All values less than the given value. */
  createdAt_lte: DateTime | null; /* All values less than or equal the given value. */
  createdAt_gt: DateTime | null; /* All values greater than the given value. */
  createdAt_gte: DateTime | null; /* All values greater than or equal the given value. */
  id: string | null; 
  id_not: string | null; /* All values that are not equal to given value. */
  id_in: string[]; /* All values that are contained in given list. */
  id_not_in: string[]; /* All values that are not contained in given list. */
  id_lt: string | null; /* All values less than the given value. */
  id_lte: string | null; /* All values less than or equal the given value. */
  id_gt: string | null; /* All values greater than the given value. */
  id_gte: string | null; /* All values greater than or equal the given value. */
  id_contains: string | null; /* All values containing the given string. */
  id_not_contains: string | null; /* All values not containing the given string. */
  id_starts_with: string | null; /* All values starting with the given string. */
  id_not_starts_with: string | null; /* All values not starting with the given string. */
  id_ends_with: string | null; /* All values ending with the given string. */
  id_not_ends_with: string | null; /* All values not ending with the given string. */
  name: string | null; 
  name_not: string | null; /* All values that are not equal to given value. */
  name_in: string[]; /* All values that are contained in given list. */
  name_not_in: string[]; /* All values that are not contained in given list. */
  name_lt: string | null; /* All values less than the given value. */
  name_lte: string | null; /* All values less than or equal the given value. */
  name_gt: string | null; /* All values greater than the given value. */
  name_gte: string | null; /* All values greater than or equal the given value. */
  name_contains: string | null; /* All values containing the given string. */
  name_not_contains: string | null; /* All values not containing the given string. */
  name_starts_with: string | null; /* All values starting with the given string. */
  name_not_starts_with: string | null; /* All values not starting with the given string. */
  name_ends_with: string | null; /* All values ending with the given string. */
  name_not_ends_with: string | null; /* All values not ending with the given string. */
  secret: string | null; 
  secret_not: string | null; /* All values that are not equal to given value. */
  secret_in: string[]; /* All values that are contained in given list. */
  secret_not_in: string[]; /* All values that are not contained in given list. */
  secret_lt: string | null; /* All values less than the given value. */
  secret_lte: string | null; /* All values less than or equal the given value. */
  secret_gt: string | null; /* All values greater than the given value. */
  secret_gte: string | null; /* All values greater than or equal the given value. */
  secret_contains: string | null; /* All values containing the given string. */
  secret_not_contains: string | null; /* All values not containing the given string. */
  secret_starts_with: string | null; /* All values starting with the given string. */
  secret_not_starts_with: string | null; /* All values not starting with the given string. */
  secret_ends_with: string | null; /* All values ending with the given string. */
  secret_not_ends_with: string | null; /* All values not ending with the given string. */
  size: number | null; 
  size_not: number | null; /* All values that are not equal to given value. */
  size_in: number[]; /* All values that are contained in given list. */
  size_not_in: number[]; /* All values that are not contained in given list. */
  size_lt: number | null; /* All values less than the given value. */
  size_lte: number | null; /* All values less than or equal the given value. */
  size_gt: number | null; /* All values greater than the given value. */
  size_gte: number | null; /* All values greater than or equal the given value. */
  updatedAt: DateTime | null; 
  updatedAt_not: DateTime | null; /* All values that are not equal to given value. */
  updatedAt_in: DateTime[]; /* All values that are contained in given list. */
  updatedAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  updatedAt_lt: DateTime | null; /* All values less than the given value. */
  updatedAt_lte: DateTime | null; /* All values less than or equal the given value. */
  updatedAt_gt: DateTime | null; /* All values greater than the given value. */
  updatedAt_gte: DateTime | null; /* All values greater than or equal the given value. */
  url: string | null; 
  url_not: string | null; /* All values that are not equal to given value. */
  url_in: string[]; /* All values that are contained in given list. */
  url_not_in: string[]; /* All values that are not contained in given list. */
  url_lt: string | null; /* All values less than the given value. */
  url_lte: string | null; /* All values less than or equal the given value. */
  url_gt: string | null; /* All values greater than the given value. */
  url_gte: string | null; /* All values greater than or equal the given value. */
  url_contains: string | null; /* All values containing the given string. */
  url_not_contains: string | null; /* All values not containing the given string. */
  url_starts_with: string | null; /* All values starting with the given string. */
  url_not_starts_with: string | null; /* All values not starting with the given string. */
  url_ends_with: string | null; /* All values ending with the given string. */
  url_not_ends_with: string | null; /* All values not ending with the given string. */
}

export interface UserSubscriptionFilter {
  AND: UserSubscriptionFilter[]; /* Logical AND on all given filters. */
  OR: UserSubscriptionFilter[]; /* Logical OR on all given filters. */
  mutation_in: _ModelMutationType[]; /* The subscription event gets dispatched when it&#x27;s listed in mutation_in */
  updatedFields_contains: string | null; /* The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains_every: string[]; /* The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_some: string[]; /* The subscription event gets only dispatched when some of the field names included in this list have been updated */
  node: UserSubscriptionFilterNode | null; 
}

export interface UserSubscriptionFilterNode {
  createdAt: DateTime | null; 
  createdAt_not: DateTime | null; /* All values that are not equal to given value. */
  createdAt_in: DateTime[]; /* All values that are contained in given list. */
  createdAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  createdAt_lt: DateTime | null; /* All values less than the given value. */
  createdAt_lte: DateTime | null; /* All values less than or equal the given value. */
  createdAt_gt: DateTime | null; /* All values greater than the given value. */
  createdAt_gte: DateTime | null; /* All values greater than or equal the given value. */
  id: string | null; 
  id_not: string | null; /* All values that are not equal to given value. */
  id_in: string[]; /* All values that are contained in given list. */
  id_not_in: string[]; /* All values that are not contained in given list. */
  id_lt: string | null; /* All values less than the given value. */
  id_lte: string | null; /* All values less than or equal the given value. */
  id_gt: string | null; /* All values greater than the given value. */
  id_gte: string | null; /* All values greater than or equal the given value. */
  id_contains: string | null; /* All values containing the given string. */
  id_not_contains: string | null; /* All values not containing the given string. */
  id_starts_with: string | null; /* All values starting with the given string. */
  id_not_starts_with: string | null; /* All values not starting with the given string. */
  id_ends_with: string | null; /* All values ending with the given string. */
  id_not_ends_with: string | null; /* All values not ending with the given string. */
  updatedAt: DateTime | null; 
  updatedAt_not: DateTime | null; /* All values that are not equal to given value. */
  updatedAt_in: DateTime[]; /* All values that are contained in given list. */
  updatedAt_not_in: DateTime[]; /* All values that are not contained in given list. */
  updatedAt_lt: DateTime | null; /* All values less than the given value. */
  updatedAt_lte: DateTime | null; /* All values less than or equal the given value. */
  updatedAt_gt: DateTime | null; /* All values greater than the given value. */
  updatedAt_gte: DateTime | null; /* All values greater than or equal the given value. */
}
export interface AllCarsQueryArgs {
  filter: CarFilter | null; 
  orderBy: CarOrderBy | null; 
  skip: number | null; 
  after: string | null; 
  before: string | null; 
  first: number | null; 
  last: number | null; 
}
export interface AllFilesQueryArgs {
  filter: FileFilter | null; 
  orderBy: FileOrderBy | null; 
  skip: number | null; 
  after: string | null; 
  before: string | null; 
  first: number | null; 
  last: number | null; 
}
export interface AllUsersQueryArgs {
  filter: UserFilter | null; 
  orderBy: UserOrderBy | null; 
  skip: number | null; 
  after: string | null; 
  before: string | null; 
  first: number | null; 
  last: number | null; 
}
export interface AllCarsMetaQueryArgs {
  filter: CarFilter | null; 
  orderBy: CarOrderBy | null; 
  skip: number | null; 
  after: string | null; 
  before: string | null; 
  first: number | null; 
  last: number | null; 
}
export interface AllFilesMetaQueryArgs {
  filter: FileFilter | null; 
  orderBy: FileOrderBy | null; 
  skip: number | null; 
  after: string | null; 
  before: string | null; 
  first: number | null; 
  last: number | null; 
}
export interface AllUsersMetaQueryArgs {
  filter: UserFilter | null; 
  orderBy: UserOrderBy | null; 
  skip: number | null; 
  after: string | null; 
  before: string | null; 
  first: number | null; 
  last: number | null; 
}
export interface CarQueryArgs {
  id: string | null; 
}
export interface FileQueryArgs {
  id: string | null; 
  secret: string | null; 
  url: string | null; 
}
export interface UserQueryArgs {
  id: string | null; 
}
export interface NodeQueryArgs {
  id: string; /* The ID of an object */
}
export interface CreateCarMutationArgs {
  make: string | null; 
  model: string | null; 
  photoURL: string | null; 
  price: number | null; 
  year: number | null; 
}
export interface CreateFileMutationArgs {
  name: string; 
}
export interface UpdateCarMutationArgs {
  id: string; 
  make: string | null; 
  model: string | null; 
  photoURL: string | null; 
  price: number | null; 
  year: number | null; 
}
export interface UpdateFileMutationArgs {
  id: string; 
  name: string | null; 
}
export interface UpdateUserMutationArgs {
  id: string; 
}
export interface UpdateOrCreateCarMutationArgs {
  update: UpdateCar; 
  create: CreateCar; 
}
export interface UpdateOrCreateFileMutationArgs {
  update: UpdateFile; 
  create: CreateFile; 
}
export interface UpdateOrCreateUserMutationArgs {
  update: UpdateUser; 
}
export interface DeleteCarMutationArgs {
  id: string; 
}
export interface DeleteFileMutationArgs {
  id: string; 
}
export interface DeleteUserMutationArgs {
  id: string; 
}
export interface CarSubscriptionArgs {
  filter: CarSubscriptionFilter | null; 
}
export interface FileSubscriptionArgs {
  filter: FileSubscriptionFilter | null; 
}
export interface UserSubscriptionArgs {
  filter: UserSubscriptionFilter | null; 
}

export type CarOrderBy = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "make_ASC" | "make_DESC" | "model_ASC" | "model_DESC" | "photoURL_ASC" | "photoURL_DESC" | "price_ASC" | "price_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "year_ASC" | "year_DESC";


export type FileOrderBy = "contentType_ASC" | "contentType_DESC" | "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "secret_ASC" | "secret_DESC" | "size_ASC" | "size_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "url_ASC" | "url_DESC";


export type UserOrderBy = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "updatedAt_ASC" | "updatedAt_DESC";


export type _ModelMutationType = "CREATED" | "UPDATED" | "DELETED";

export namespace AllCars {
  export type Variables = {
  }

  export type Query = {
    allCars: AllCars[]; 
  }

  export type AllCars = {
    id: string; 
    make: string | null; 
    model: string | null; 
    year: number | null; 
  }
}
export namespace Car {
  export type Variables = {
    id: string;
  }

  export type Query = {
    Car: Car | null; 
  }

  export type Car = {
    make: string | null; 
    model: string | null; 
    photoURL: string | null; 
    price: number | null; 
  }
}
