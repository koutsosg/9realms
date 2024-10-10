import { useDraggable } from "@dnd-kit/core";
import DragIcon from "@/app/components/Icons/DragIcon";

const DragButton = ({ id, isDragging }: any) => {
  const {
    attributes: draggableAttributes,
    listeners: draggableListeners,
    setNodeRef: setDraggableNodeRef,
  } = useDraggable({ id: id });

  return (
    <button
      ref={setDraggableNodeRef}
      {...draggableAttributes}
      {...draggableListeners}
      className={`${!isDragging ? "cursor-grab" : "cursor-grabbing"} touch-none rounded-lg border border-black bg-white px-1 leading-[0px] disabled:opacity-50`}
    >
      <DragIcon />
    </button>
  );
};
export default DragButton;
