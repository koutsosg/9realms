import React, { useState } from "react";
import SectionHeader from "@/app/components/CVPreview/SectionHeader/SectionHeader";
import {
  CertificationSection,
  EducationSection,
  JobSection,
  RenderableSection,
} from "@/app/lib/utils/CVService.types";
import JobEditItem from "@/app/components/CVEdit/JobEditItem/JobEditItem";
import EduEditItem from "@/app/components/CVEdit/EduEditItem/EduEditItem";
import CertEditItem from "@/app/components/CVEdit/CertEditItem/CertEditItem";
import Button from "@/app/components/Button/Button";
import { generateBlankItem } from "@/app/lib/utils/generateBlanks";
import { UniqueIdentifier } from "@dnd-kit/core";

interface SectionEditProps {
  section: RenderableSection;
  dispatch: React.Dispatch<any>;
  sections: RenderableSection[];
}
const isJobSection = (section: RenderableSection): section is JobSection => {
  return section.type === "job";
};

const isCertificationSection = (
  section: RenderableSection,
): section is CertificationSection => {
  return section.type === "certification";
};

const isEducationSection = (
  section: RenderableSection,
): section is EducationSection => {
  return section.type === "education";
};

const SectionEdit: React.FC<SectionEditProps> = ({
  section,
  dispatch,
  sections,
}) => {
  const renderSectionContent = () => {
    if (isJobSection(section)) {
      return (
        <JobEditItem
          section={section}
          dispatch={dispatch}
          sections={sections}
        />
      );
    }
    if (isEducationSection(section)) {
      return (
        <EduEditItem
          section={section}
          dispatch={dispatch}
          sections={sections}
        />
      );
    }
    if (isCertificationSection(section)) {
      return (
        <CertEditItem
          section={section}
          dispatch={dispatch}
          sections={sections}
        />
      );
    }
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleDelete = () => {
    dispatch({ type: "DELETE_SECTION", payload: { id: section.id } });
  };

  const handleAddItem = (sectionType: string, sectionId: UniqueIdentifier) => {
    const newItem = generateBlankItem(sectionType);
    dispatch({ type: "ADD_ITEM", payload: { newItem, sectionId } });
    console.log("newItem", sectionId, sectionType);
  };
  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex w-full gap-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered && (
          <Button
            variant="danger"
            size="none"
            extraClasses="self-start px-1 text-sm"
            onClick={handleDelete}
          >
            d
          </Button>
        )}

        <SectionHeader title={section.title} />
      </div>
      <div className="flex flex-col gap-3">{renderSectionContent()}</div>
      <Button
        variant="primary"
        size="none"
        extraClasses=" px-1 text-sm"
        onClick={() => handleAddItem(section.type, section.id)}
      >
        Add experience
      </Button>
    </div>
  );
};
export default SectionEdit;
