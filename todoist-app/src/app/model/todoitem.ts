import {Attribute, JsonApiModel, JsonApiModelConfig} from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'todoItems'
})export class TodoItem extends JsonApiModel {
  @Attribute()
  title: string;
  @Attribute()
  description: string;
  @Attribute()
  state: ItemState;
}

export enum ItemState {
  todo = 'TODO',
  doing = 'DOING',
  done = 'DONE'
}

export const ItemState2LabelMapping: Record<ItemState, string> = {
  [ItemState.todo]: 'Todo',
  [ItemState.doing]: 'Doing',
  [ItemState.done]: 'Done',
};
