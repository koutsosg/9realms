import { useDraggable } from "@dnd-kit/core";

const DragButton = ({ id, isDragging }: any) => {
  const {
    attributes: draggableAttributes,
    listeners: draggableListeners,
    setNodeRef: setDraggableNodeRef,
  } = useDraggable({ id: id });

  return (
    <button
      disabled={true}
      ref={setDraggableNodeRef}
      {...draggableAttributes}
      {...draggableListeners}
      className={`${!isDragging ? "cursor-grab" : "cursor-grabbing"} touch-none rounded-lg border border-black bg-gray-500 px-2 py-1 leading-[0px] disabled:opacity-50`}
    >
      -
    </button>
  );
};
export default DragButton;
