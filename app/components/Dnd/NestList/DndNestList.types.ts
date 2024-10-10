import { SimplifiedDescriptionContent } from "@/app/lib/utils/CVService.types";
import { UniqueIdentifier } from "@dnd-kit/core";

export interface DndListComponentProps<T extends { id: UniqueIdentifier }> {
  items: T[];
  children: (item: T) => React.ReactNode;
  dispatch: React.Dispatch<ActionType<T>>;
}

export type ActionType<T extends { id: UniqueIdentifier }> =
  | {
      type: "REORDER_ITEMS";
      payload: T[];
    }
  | {
      type: "DELETE_ITEM";
      payload: { sectionId: UniqueIdentifier; itemId: UniqueIdentifier };
    }
  | {
      type: "ADD_DESC";
      payload: {
        newDesc: SimplifiedDescriptionContent;
        itemId: UniqueIdentifier;
        descId: UniqueIdentifier;
      };
    }
  | {
      type: "DELETE_DESC";
      payload: {
        itemId: UniqueIdentifier;
        descId: UniqueIdentifier;
      };
    };

export interface SortableItemProps {
  itemId: UniqueIdentifier;
  content: React.ReactNode;
  activeId: UniqueIdentifier | null;
  isDragging: boolean;
  style?: React.CSSProperties;
  handle?: boolean;
}
