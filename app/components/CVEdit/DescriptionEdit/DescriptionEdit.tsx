import React from "react";
import DndListComponent from "@/app/components/Dnd/NestList/DndNestList"; // Import your DnD component
import {
  SimplifiedDescriptionContent,
  CertificationSection,
  EducationSection,
  JobSection,
} from "@/app/lib/utils/CVService.types";
import { DescriptionListProps } from "./DescriptionEdit.types";

const DescriptionEditList: React.FC<DescriptionListProps> = ({
  items,
  dispatch,
  sectionId,
  sections,
  itemId,
}) => {
  return (
    <DndListComponent
      items={items.description_content}
      dispatch={(action) => {
        const updatedSections = sections.map((sec) => {
          if (sec.id === sectionId) {
            // Handle the type of each section explicitly to avoid type mismatch
            if (sec.type === "certification") {
              const updatedCertifications = (
                sec as CertificationSection
              ).data.map((item) =>
                item.id === itemId
                  ? {
                      ...item,
                      description: {
                        ...item.description,
                        description_content:
                          action.payload as SimplifiedDescriptionContent[],
                      },
                    }
                  : item,
              );
              return {
                ...sec,
                data: updatedCertifications,
              };
            }

            if (sec.type === "job") {
              const updatedJobs = (sec as JobSection).data.map((item) =>
                item.id === itemId
                  ? {
                      ...item,
                      description: {
                        ...item.description,
                        description_content:
                          action.payload as SimplifiedDescriptionContent[],
                      },
                    }
                  : item,
              );
              return {
                ...sec,
                data: updatedJobs,
              };
            }

            if (sec.type === "education") {
              const updatedEducation = (sec as EducationSection).data.map(
                (item) =>
                  item.id === itemId
                    ? {
                        ...item,
                        description: {
                          ...item.description,
                          description_content:
                            action.payload as SimplifiedDescriptionContent[],
                        },
                      }
                    : item,
              );
              return {
                ...sec,
                data: updatedEducation,
              };
            }
          }

          return sec;
        });

        // Dispatch the action with the updated sections
        dispatch({
          type: "REORDER_ITEMS",
          payload: updatedSections,
        });
      }}
    >
      {(desc) => (
        <div key={desc.id}>
          {!items.bullets ? (
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
  );
};

export default DescriptionEditList;
