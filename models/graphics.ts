
export enum ImageType {
  url,
  svg,
  blob
}

export class Image {
  constructor (readonly type: ImageType, readonly value: string) {
  }
}
