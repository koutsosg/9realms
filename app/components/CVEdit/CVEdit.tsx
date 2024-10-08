"use client";
import { signOut } from "next-auth/react";
import { RenderableSection } from "@/app/lib/utils/CVService.types";
import LinkC from "@/app/components/LinkC/LinkC";
import DescriptionList from "@/app/components/CVPreview/Description/Description";
import Button from "@/app/components/Button/Button";
import { useCVContext } from "@/app/lib/providers/CVContext";
import DndListComponent from "@/app/components/Dnd/NestList/DndNestList";
import SectionEdit from "@/app/components/CVEdit/SectionEdit/SectionEdit";
import { generateBlankSection } from "@/app/lib/utils/generateBlanks";
import AddSections from "@/app/components/CVEdit/AddSections/AddSections";

const CVEdit = () => {
  const { state, dispatch } = useCVContext();
  console.log(state);
  const renderSection = (section: RenderableSection) => {
    switch (section.type) {
      case "job":
        return (
          <SectionEdit
            key={section.id}
            section={section}
            dispatch={dispatch}
            sections={state.sections}
          />
        );
      case "certification":
        return (
          <SectionEdit
            key={section.id}
            section={section}
            dispatch={dispatch}
            sections={state.sections}
          />
        );
      case "education":
        return (
          <SectionEdit
            key={section.id}
            section={section}
            dispatch={dispatch}
            sections={state.sections}
          />
        );

      default:
        return null;
    }
  };

  const handleAddSection = (type: string) => {
    const newSection = generateBlankSection(type);
    dispatch({ type: "ADD_SECTION", payload: newSection });
  };
  return (
    <div className="flex flex-col items-center px-2">
      <div className="flex max-w-a4 flex-col gap-3 bg-white px-2 py-2 text-primary_3 sm:px-4 sm:py-3 md:px-8 md:py-6">
        {/* header */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col justify-between gap-2 sm:flex-row">
            <div className="text-nowrap text-sm font-semibold uppercase sm:text-lg md:text-xl">
              {state?.user.name} {state?.user.lastname}
            </div>

            <div className="flex items-center gap-1 text-nowrap text-xs md:text-sm">
              <p>
                {state?.user.city}, {state?.user.country}
              </p>
              |
              <LinkC href={`tel:${state?.user.phone}`} />|
              <LinkC href={`mailto:${state?.user.email}`} />|
              <LinkC href={`/`}>Linkedin</LinkC>
            </div>
          </div>
          {/** title-Description */}
          <div className="flex flex-col gap-1">
            <h1 className="text-xs font-semibold sm:text-sm">{state?.title}</h1>
            <DescriptionList
              content={state?.description.description_content || []}
              bullets={state?.description.bullets}
            />
          </div>
        </div>
        {/**Sections */}
        <div className="flex flex-col gap-3">
          <DndListComponent items={state.sections} dispatch={dispatch}>
            {(section) => renderSection(section)}
          </DndListComponent>
        </div>
        <AddSections onAddSection={handleAddSection} />
      </div>
      <Button
        variant="danger"
        onClick={() => signOut({ callbackUrl: "/cv_view" })}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default CVEdit;
