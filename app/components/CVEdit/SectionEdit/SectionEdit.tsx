import React from "react";
import SectionHeader from "../../CVPreview/SectionHeader/SectionHeader";
import DndListComponent from "@/app/components/Dnd/NestList/DndNestList"; // Import your DnD component
import { ActionType } from "@/app/components/Dnd/NestList/DndNestList.types"; // Adjust this import
import DateRange from "../../DateRange/DateRange";
import { RenderableSection } from "@/app/lib/utils/CVService.types";

// Define the props for the SectionEdit component
interface SectionEditProps {
  section: RenderableSection; // Adjust based on your actual ItemType definition
  dispatch: React.Dispatch<ActionType<RenderableSection>>; // The dispatch function
}

const SectionEdit: React.FC<SectionEditProps> = ({ section, dispatch }) => {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader title={section.title} />
      <div className="flex flex-col gap-3">
        {section.data && (
          <DndListComponent
            items={section.data}
            dispatch={(action) => {
              // Update the current section's data
              const updatedItems = sections.map((i) =>
                i.id === section.id ? { ...i, data: action.payload } : i,
              );
              dispatch({
                type: "REORDER_ITEMS",
                payload: updatedItems,
              });
            }}
          >
            {(job) => (
              <div key={job.id} className="flex flex-col gap-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xxs font-bold sm:text-xs">
                      {job.position}
                    </h3>
                    <div className="text-xxs font-semibold italic sm:text-xs">
                      {job.company}
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

                <DndListComponent
                  items={job.description.description_content}
                  dispatch={(action) => {
                    const updatedSections = sections.map((sec) => {
                      return {
                        ...sec,
                        data: sec.data.map((jobItem) => {
                          if (jobItem.id === job.id) {
                            return {
                              ...jobItem,
                              description: {
                                ...jobItem.description,
                                description_content: action.payload,
                              },
                            };
                          }
                          return jobItem;
                        }),
                      };
                    });

                    dispatch({
                      type: "REORDER_ITEMS",
                      payload: updatedSections,
                    });
                  }}
                >
                  {(desc) => (
                    <div key={desc.id}>
                      {desc.bullets ? (
                        <p className="text-xxs sm:text-xs">{desc.content}</p>
                      ) : (
                        <div className="flex list-disc gap-4 pl-3.5">
                          <div className="list-item text-xxs sm:text-xs">
                            {desc.content}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </DndListComponent>
              </div>
            )}
          </DndListComponent>
        )}
      </div>
    </div>
  );
};

export default SectionEdit;
