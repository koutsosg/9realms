"use client";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  useReducer,
} from "react";
import { itemsReducer } from "@/app/components/Dnd/NestList/DndReducer";
import { ItemType } from "@/app/components/Dnd/NestList/DndNestList.types";
import DndListComponent from "@/app/components/Dnd/NestList/DndNestList";
import {
  SimplifiedCVResponse,
  SimplifiedDescription,
  SimplifiedDescriptionContent,
} from "../../lib/utils/CVService.types";
import LinkC from "../LinkC/LinkC";
import DescriptionList from "../CVPreview/Description/Description";
import SectionContent from "../CVPreview/Section/SectionContent";
import EduItem from "../CVPreview/EduItem/EduItem";
import CertItem from "../CVPreview/CertItem/CertItem";
import JobItem from "../CVPreview/JobItem/JobItem";
import Button from "../Button/Button";
import { signOut } from "next-auth/react";
import SectionHeader from "../CVPreview/SectionHeader/SectionHeader";
import DateRange from "../DateRange/DateRange";
import classNames from "classnames";
import { UniqueIdentifier } from "@dnd-kit/core";
import SectionEdit from "./SectionEdit/SectionEdit";

const CVEdit: React.FC<{ cv: SimplifiedCVResponse | null }> = ({ cv }) => {
  const [sections, dispatch] = useReducer(itemsReducer, cv?.sections || []);

  console.log(cv);
  return (
    <div className="flex flex-col items-center px-2">
      <div className="flex max-w-a4 flex-col gap-3 bg-white px-2 py-2 text-primary_3 sm:px-4 sm:py-3 md:px-8 md:py-6">
        {/* header */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col justify-between gap-2 sm:flex-row">
            <div className="text-nowrap text-sm font-semibold uppercase sm:text-lg md:text-xl">
              {cv?.user.name} {cv?.user.lastname}
            </div>

            <div className="flex items-center gap-1 text-nowrap text-xs md:text-sm">
              <p>
                {cv?.user.city}, {cv?.user.country}
              </p>
              |
              <LinkC href={`tel:${cv?.user.phone}`} />|
              <LinkC href={`mailto:${cv?.user.email}`} />|
              <LinkC href={`/`}>Linkedin</LinkC>
            </div>
          </div>
          {/** title-Description */}
          <div className="flex flex-col gap-1">
            <h1 className="text-xs font-semibold sm:text-sm">{cv?.title}</h1>
            <DescriptionList
              content={cv?.description.description_content || []}
              bullets={cv?.description.bullets}
            />
          </div>
        </div>
        {/**Sections */}
        <div className="flex flex-col gap-3">
          <DndListComponent items={sections} dispatch={dispatch}>
            {(section) => (
              <SectionEdit
                key={section.id} // Make sure to give each section a unique key
                section={section}
                dispatch={dispatch} // Pass dispatch to handle updates
              />
            )}
          </DndListComponent>
        </div>
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
