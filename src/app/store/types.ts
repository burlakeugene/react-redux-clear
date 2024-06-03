export interface IItem {
  name: string;
  date: string;
  id: string;
  status: string;
}

export interface RootState {
  todo: { list: IItem[] };
}
