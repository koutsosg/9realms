import { useState } from "react";
import Button from "@/app/components/Button/Button";
import DateRange from "@/app/components/DateRange/DateRange";
import DescriptionEditLists from "@/app/components/CVEdit/DescriptionEdit/DescriptionEdit";
import { generateDescriptionContent } from "@/app/lib/utils/generateBlanks";
import LinkC from "@/app/components/LinkC/LinkC";
import { RenderableSection } from "@/app/lib/utils/CVService.types";
import { ActionType } from "@/app/components/Dnd/NestList/DndNestList.types";
import { useDndContext } from "@dnd-kit/core";
import ToolBar from "../ToolBar/Toolbar";

interface EditItemProps {
  item: any;
  section: RenderableSection;
  dispatch: React.Dispatch<ActionType<RenderableSection>>;
  sections: RenderableSection[];
  format?: string;
}

const EditItem: React.FC<EditItemProps> = ({
  item,
  section,
  dispatch,
  sections,
  format = "MMM yyyy",
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { active } = useDndContext();
  const handleMouseEnter = () => setHoveredId(item.id);
  const handleMouseLeave = () => setHoveredId(null);
  const handleDelete = () => {
    dispatch({
      type: "DELETE_ITEM",
      payload: { sectionId: section.id, itemId: item.id },
    });
  };

  const handleAddDescContent = (descId: string) => {
    const newDesc = generateDescriptionContent();
    dispatch({
      type: "ADD_DESC",
      payload: { newDesc, itemId: item.id, descId },
    });
  };

  return (
    <div key={item.id} className="flex flex-col gap-1">
      <div
        className="flex items-start justify-between"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex gap-1">
          {hoveredId === item.id && (
            <ToolBar
              onDelete={handleDelete}
              onAdd={() => handleAddDescContent(item.description.id)}
            />
          )}

          <div>
            <h3 className="text-xxs font-bold sm:text-xs">
              {item.position || item.field_of_study || item.course}
            </h3>
            <div className="text-xxs font-semibold italic sm:text-xs">
              {item.company || item.institution}
            </div>
          </div>
        </div>
        <div className="text-right">
          <DateRange
            start={item.date_start}
            end={item.date_end}
            format={format}
          />
          {item.verification ? (
            <LinkC
              href={item.verification}
              className="flex text-xxs sm:text-xs"
              external
            >
              Verification
            </LinkC>
          ) : (
            <div className="text-xxs sm:text-xs">
              {item.city}, {item.country}
            </div>
          )}
        </div>
      </div>
      {!active && (
        <DescriptionEditLists
          items={item.description}
          dispatch={dispatch}
          sectionId={section.id}
          sections={sections}
          itemId={item.id}
        />
      )}
    </div>
  );
};

export default EditItem;
