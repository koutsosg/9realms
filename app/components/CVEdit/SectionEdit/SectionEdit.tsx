import React from "react";
import SectionHeader from "../../CVPreview/SectionHeader/SectionHeader";
import DndListComponent from "@/app/components/Dnd/NestList/DndNestList"; // Import your DnD component
import { ActionType } from "@/app/components/Dnd/NestList/DndNestList.types"; // Adjust this import
import DateRange from "../../DateRange/DateRange";
import {
  CertificationSection,
  EducationSection,
  JobSection,
  RenderableSection,
} from "@/app/lib/utils/CVService.types";
import JobEditItem from "../JobEditItem/JobEditItem";
import EduEditItem from "../EduEditItem/EduEditItem";
import CertEditItem from "../CertEditItem/CertEditItem";

interface SectionEditProps {
  section: RenderableSection;
  dispatch: React.Dispatch<ActionType<RenderableSection>>;
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
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader title={section.title} />
      <div className="flex flex-col gap-3">{renderSectionContent()}</div>
    </div>
  );
};
export default SectionEdit;
