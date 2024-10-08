import React, { useState } from "react";
import DndListComponent from "@/app/components/Dnd/NestList/DndNestList";
import {
  SimplifiedDescriptionContent,
  CertificationSection,
  EducationSection,
  JobSection,
} from "@/app/lib/utils/CVService.types";
import { DescriptionListProps } from "./DescriptionEdit.types";
import Button from "../../Button/Button";

const DescriptionEditList: React.FC<DescriptionListProps> = ({
  items,
  dispatch,
  sectionId,
  sections,
  itemId,
}) => {
  const [hoveredDescId, setHovereDescId] = useState<string | null>(null);
  if (!items) return <></>;
  const handleMouseEnter = (jobId: string) => setHovereDescId(jobId);
  const handleMouseLeave = () => setHovereDescId(null);
  const handleDelete = (itemId: string, descId: string) => {
    dispatch({
      type: "DELETE_DESC",
      payload: { itemId, descId },
    });
  };
  return (
    <DndListComponent
      items={items?.description_content}
      dispatch={(action) => {
        const updatedSections = sections.map((sec) => {
          if (sec.id === sectionId) {
            // Handles the type of each section explicitly to avoid type mismatch
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
        <div
          key={desc.id}
          onMouseEnter={() => handleMouseEnter(desc.id)}
          onMouseLeave={handleMouseLeave}
          className="flex gap-2"
        >
          {hoveredDescId === desc.id && (
            <Button
              variant="danger"
              size="none"
              extraClasses="self-center px-1 text-sm"
              onClick={() => handleDelete(itemId, desc.id)}
            >
              d
            </Button>
          )}

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
