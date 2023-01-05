export enum Type {
  FOLDER,
  FILE
}
export type File = {
  name: string
  type: Type
}