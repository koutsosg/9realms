import { UniqueIdentifier } from "@dnd-kit/core";

export interface ItemType {
  id: UniqueIdentifier;
  [key: string]: any;
}

export type ActionType = { type: "REORDER_ITEMS"; payload: ItemType[] };

export interface SortableItemProps {
  itemId: UniqueIdentifier;
  content: React.ReactNode;
  activeId: UniqueIdentifier | null;
  isDragging: boolean;
  style?: React.CSSProperties;
}

export interface DndListComponentProps {
  items: ItemType[];
  children: (item: ItemType) => React.ReactNode;
  dispatch: React.Dispatch<ActionType>;
}
