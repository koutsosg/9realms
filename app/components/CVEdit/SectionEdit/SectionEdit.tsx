import React, { useState } from "react";
import SectionHeader from "@/app/components/CVPreview/SectionHeader/SectionHeader";
import { generateBlankItem } from "@/app/lib/utils/generateBlanks";
import JobEditItem from "@/app/components/CVEdit/JobEditItem/JobEditItem";
import EduEditItem from "@/app/components/CVEdit/EduEditItem/EduEditItem";
import CertEditItem from "@/app/components/CVEdit/CertEditItem/CertEditItem";
import {
  RenderableSection,
  JobSection,
  EducationSection,
  CertificationSection,
} from "@/app/lib/utils/CVService.types";
import { useDndContext } from "@dnd-kit/core";
import ToolBar from "../ToolBar/Toolbar";

interface SectionEditProps {
  section: RenderableSection;
  dispatch: React.Dispatch<any>;
  sections: RenderableSection[];
}

const isJobSection = (section: RenderableSection): section is JobSection => {
  return section.type === "job";
};

const isEducationSection = (
  section: RenderableSection,
): section is EducationSection => {
  return section.type === "education";
};

const isCertificationSection = (
  section: RenderableSection,
): section is CertificationSection => {
  return section.type === "certification";
};

const SectionEdit: React.FC<SectionEditProps> = ({
  section,
  dispatch,
  sections,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { active } = useDndContext();
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleDelete = () => {
    dispatch({ type: "DELETE_SECTION", payload: { id: section.id } });
  };

  const handleAddItem = () => {
    const newItem = generateBlankItem(section.type);
    dispatch({ type: "ADD_ITEM", payload: { newItem, sectionId: section.id } });
  };

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

    return null;
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex w-full gap-1"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered && <ToolBar onDelete={handleDelete} onAdd={handleAddItem} />}
        <SectionHeader title={section.title} />
      </div>

      {!active && (
        <div className="flex flex-col gap-3">{renderSectionContent()}</div>
      )}
    </div>
  );
};

export default SectionEdit;
