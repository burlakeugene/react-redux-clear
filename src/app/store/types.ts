export interface IItem {
  name: string;
  date: Date;
  id: string;
  status: string;
}

export interface RootState {
  todo: { list: IItem[] };
}
