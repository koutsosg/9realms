import { useState } from "react";
import Button from "@/app/components/Button/Button";
import DateRange from "@/app/components/DateRange/DateRange";
import DescriptionEditLists from "@/app/components/CVEdit/DescriptionEdit/DescriptionEdit";
import { generateDescriptionContent } from "@/app/lib/utils/generateBlanks";
import LinkC from "@/app/components/LinkC/LinkC";
import { RenderableSection } from "@/app/lib/utils/CVService.types";
import { ActionType } from "@/app/components/Dnd/NestList/DndNestList.types";

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
        <div className="flex gap-2">
          {hoveredId === item.id && (
            <Button
              variant="danger"
              size="none"
              extraClasses="self-center px-1 text-sm"
              onClick={handleDelete}
            >
              d
            </Button>
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

      <DescriptionEditLists
        items={item.description}
        dispatch={dispatch}
        sectionId={section.id}
        sections={sections}
        itemId={item.id}
      />

      <Button
        variant="primary"
        size="none"
        extraClasses="self-center px-1 text-sm"
        onClick={() => handleAddDescContent(item.description.id)}
      >
        Add description content
      </Button>
    </div>
  );
};

export default EditItem;
