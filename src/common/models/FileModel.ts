export enum Type {
  Folder,
  File
}
export type File = {
  name: string
  type: Type
}