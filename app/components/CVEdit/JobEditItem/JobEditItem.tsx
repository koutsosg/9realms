import DndListComponent from "@/app/components/Dnd/NestList/DndNestList"; // Import your DnD component
import { JobEditProps } from "@/app/components/CVEdit/JobEditItem/JobEditItem.types";
import DateRange from "@/app/components/DateRange/DateRange";
import DescriptionEditLists from "@/app/components/CVEdit/DescriptionEdit/DescriptionEdit";
import { useState } from "react";
import Button from "../../Button/Button";

const JobEditItem: React.FC<JobEditProps> = ({
  section,
  dispatch,
  sections,
}) => {
  const [hoveredJobId, setHoveredJobId] = useState<string | null>(null);

  const handleMouseEnter = (jobId: string) => setHoveredJobId(jobId);
  const handleMouseLeave = () => setHoveredJobId(null);
  const handleDelete = (jobId: string) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: { sectionId: section.id, itemId: jobId },
    });
  };
  return (
    <DndListComponent
      items={section.data}
      dispatch={(action) => {
        if (action.type === "REORDER_ITEMS") {
          const updatedItems = sections.map((i) =>
            i.id === section.id ? { ...i, data: action.payload } : i,
          );

          dispatch({
            type: "REORDER_ITEMS",
            payload: updatedItems,
          });
        }
      }}
    >
      {(job) => (
        <div key={job.id} className="flex flex-col gap-1">
          <div className="flex items-start justify-between">
            <div
              className="flex gap-2"
              onMouseEnter={() => handleMouseEnter(job.id)}
              onMouseLeave={handleMouseLeave}
            >
              {hoveredJobId === job.id && (
                <Button
                  variant="danger"
                  size="none"
                  extraClasses="self-center px-1 text-sm"
                  onClick={() => handleDelete(job.id)}
                >
                  d
                </Button>
              )}
              <div>
                <h3 className="text-xxs font-bold sm:text-xs">
                  {job.position}
                </h3>
                <div className="text-xxs font-semibold italic sm:text-xs">
                  {job.company}
                </div>
              </div>
            </div>
            <div className="text-right">
              <DateRange
                start={job.date_start}
                end={job.date_end}
                format="MMM yyyy"
              />
              <div className="text-xxs sm:text-xs">
                {job.city}, {job.country}
              </div>
            </div>
          </div>
          <DescriptionEditLists
            items={job.description}
            dispatch={dispatch}
            sectionId={section.id}
            sections={sections}
            itemId={job.id}
          />
        </div>
      )}
    </DndListComponent>
  );
};
export default JobEditItem;
