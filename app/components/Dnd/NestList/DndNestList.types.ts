import { UniqueIdentifier } from "@dnd-kit/core";

export interface DndListComponentProps<T extends { id: UniqueIdentifier }> {
  items: T[];
  children: (item: T) => React.ReactNode;
  dispatch: React.Dispatch<ActionType<T>>;
}

export type ActionType<T extends { id: UniqueIdentifier }> = {
  type: "REORDER_ITEMS";
  payload: T[];
};

// Generic SortableItemProps with id constraint
export interface SortableItemProps {
  itemId: UniqueIdentifier;
  content: React.ReactNode;
  activeId: UniqueIdentifier | null;
  isDragging: boolean;
  style?: React.CSSProperties;
}
