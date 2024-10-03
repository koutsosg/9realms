import {
  EducationSection,
  RenderableSection,
} from "@/app/lib/utils/CVService.types";
import { ActionType } from "@/app/components/Dnd/NestList/DndNestList.types";

export interface EducationEditProps {
  section: EducationSection;
  dispatch: React.Dispatch<ActionType<RenderableSection>>;
  sections: RenderableSection[];
}
