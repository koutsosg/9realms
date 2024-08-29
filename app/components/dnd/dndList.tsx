"use client";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  UniqueIdentifier,
} from "@dnd-kit/core";
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useId, useState } from "react";

interface ItemType {
  id: UniqueIdentifier;
  content: string;
}
interface SortableItemProps {
  itemId: UniqueIdentifier;
  content: React.ReactNode;
  activeId: UniqueIdentifier | null;
  isDragging: boolean;
  style?: React.CSSProperties;
}
const SortableItem: React.FC<SortableItemProps> = ({
  itemId,
  content,
  activeId,
  isDragging,
  style,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: itemId,
    });
  const calculateOpacity = () => {
    if (isDragging) {
      if (itemId !== activeId) {
        return 0.5;
      }
      return 0;
    }
    return 1;
  };
  const draggedStyle: React.CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition,
    backgroundColor: itemId === activeId ? "transparent" : "",
    border: itemId === activeId ? "3px dashed #4D508A" : "",
    opacity:
      calculateOpacity() /* isDragging ? (itemId !== activeId ? 0.5 : 0) : 1 alternative method for calculate opacity  */,
    ...style,
  };

  return (
    <div ref={setNodeRef} style={draggedStyle} {...attributes} {...listeners}>
      {content}
    </div>
  );
};

interface DndListComponentProps {
  items: ItemType[];
  children: (item: ItemType) => React.ReactNode;
}

const DndListComponent: React.FC<DndListComponentProps> = ({
  items,
  children,
}) => {
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const contextId = useId();

  const handleDragStart = (event: DragStartEvent) => {
    setIsDragging(true);
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setIsDragging(false);
    setActiveId(null);
  };

  return (
    <DndContext
      id={contextId}
      modifiers={[restrictToVerticalAxis, restrictToParentElement]}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((item) => {
          return (
            <SortableItem
              key={item?.id}
              itemId={item?.id}
              content={renderItem(item)}
              activeId={activeId}
              isDragging={isDragging}
            />
          );
        })}
      </SortableContext>
      <DragOverlay>
        {isDragging ? <div>Dragging item {activeId}</div> : null}
      </DragOverlay>
    </DndContext>
  );
};
export default DndListComponent;
