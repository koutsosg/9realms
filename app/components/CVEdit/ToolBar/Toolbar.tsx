import React from "react";
import DeleteIcon from "@/app/components/Icons/DeleteIcon";
import AddIcon from "@/app/components/Icons/AddIcon";
import Button from "@/app/components/Button/Button";
import EditIcon from "@/app/components/Icons/EditIcon";

interface ToolBarProps {
  onEdit?: () => void;
  onDelete: () => void;
  onAdd?: () => void;
}

const ToolBar: React.FC<ToolBarProps> = ({ onEdit, onDelete, onAdd }) => {
  const handleDeleteClick = () => {
    const confirmed = window.confirm("Are you sure you want to delete this?");
    if (confirmed) {
      onDelete();
    }
  };

  return (
    <div className="px flex items-center gap-1">
      <Button
        variant="primary"
        size="none"
        extraClasses="p-1 text-sm"
        onClick={onDelete}
      >
        <EditIcon stroke="white" />
      </Button>
      <Button
        variant="danger"
        size="none"
        extraClasses="p-1 text-sm"
        onClick={handleDeleteClick}
      >
        <DeleteIcon stroke="white" />
      </Button>
      {onAdd && (
        <Button
          variant="primary"
          size="none"
          extraClasses="bg-green-500 hover:bg-green-600 p-1 text-sm"
          onClick={onAdd}
        >
          <AddIcon stroke="white" />
        </Button>
      )}
    </div>
  );
};

export default ToolBar;
