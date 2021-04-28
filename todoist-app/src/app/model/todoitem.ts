export class TodoItem {
  id: string;
  title: string;
  description: string;
  itemState: ItemState
}

export enum ItemState {
  todo = "TODO",
  doing = "DOING",
  done = "DONE"
}
