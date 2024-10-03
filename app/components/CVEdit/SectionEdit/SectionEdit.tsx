import React from "react";
import SectionHeader from "@/app/components/CVPreview/SectionHeader/SectionHeader";
import { ActionType } from "@/app/components/Dnd/NestList/DndNestList.types";
import {
  CertificationSection,
  EducationSection,
  JobSection,
  RenderableSection,
} from "@/app/lib/utils/CVService.types";
import JobEditItem from "@/app/components/CVEdit/JobEditItem/JobEditItem";
import EduEditItem from "@/app/components/CVEdit/EduEditItem/EduEditItem";
import CertEditItem from "@/app/components/CVEdit/CertEditItem/CertEditItem";

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
