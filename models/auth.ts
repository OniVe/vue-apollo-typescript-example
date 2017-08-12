import { Image } from './graphics'
import { Nullable } from './system'

export class User {
  name: string
  email: string
  image: Image
}

export type UserData = Nullable<User>
