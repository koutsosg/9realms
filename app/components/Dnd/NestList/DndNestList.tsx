"use client";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragStartEvent,
  UniqueIdentifier,
} from "@dnd-kit/core";
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useId, useState } from "react";
import {
  DndListComponentProps,
  SortableItemProps,
} from "@/app/components/Dnd/NestList/DndNestList.types";
import DragButton from "@/app/components/Dnd/DragButton/DragButton";

const SortableItem = ({
  itemId,
  content,
  activeId,
  isDragging,
  style,
}: SortableItemProps) => {
  const { attributes, setNodeRef, transform, transition } = useSortable({
    id: itemId,
  });

  const calculateOpacity = () => {
    if (isDragging) {
      if (itemId !== activeId) {
        return 0.5;
      }
      return 1; // make this to 0 incase of drag overlay
    }
    return 1;
  };

  const draggedStyle: React.CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition,
    backgroundColor: itemId === activeId ? "transparent" : "",
    opacity:
      calculateOpacity() /* isDragging ? (itemId !== activeId ? 0.5 : 0) : 1 alternative method for calculate opacity  */,
    ...style,
  };

  return (
    <div
      ref={setNodeRef}
      style={draggedStyle}
      {...attributes}
      className="relative cursor-default"
    >
      <div className="flex-grow">{content}</div>

      <div className="absolute -right-4 top-0 transform">
        <DragButton id={itemId} isDragging={isDragging} />
      </div>
    </div>
  );
};

const DndListComponent = <T extends { id: UniqueIdentifier }>({
  items,
  children,
  dispatch,
}: DndListComponentProps<T>) => {
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const contextId = useId();

  const handleDragStart = (event: DragStartEvent) => {
    setIsDragging(true);
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over?.id);

      const newItems = [...items];
      const [movedItem] = newItems.splice(oldIndex, 1);
      newItems.splice(newIndex, 0, movedItem);

      dispatch({ type: "REORDER_ITEMS", payload: newItems });
    }
    setIsDragging(false);
    setActiveId(null);
  };

  return (
    <DndContext
      id={contextId}
      modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items?.map((item) => {
          return (
            <SortableItem
              key={item?.id}
              itemId={item?.id}
              content={children(item)}
              activeId={activeId}
              isDragging={isDragging}
            />
          );
        })}
      </SortableContext>
      {/**** in case of drag overlay *****/}
      {/*    <DragOverlay>
        {isDragging && activeItem ? (
          <SortableItem
            itemId={activeItem.id}
            content={children(activeItem)}
            activeId={activeId}
            isDragging={isDragging}
            style={{ transform: "none", transition: "none", opacity: 1 }} // Override transform and transition for the overlay
          />
        ) : null}
      </DragOverlay> */}
    </DndContext>
  );
};
export default DndListComponent;
