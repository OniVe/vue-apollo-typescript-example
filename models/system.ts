
export type Nullable<T> = T | null

export type Existable<T> = Nullable<T> | undefined

export type Voidable<T extends Function> = T | void
