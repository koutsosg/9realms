import { JobSection, RenderableSection } from "@/app/lib/utils/CVService.types";
import { ActionType } from "../../Dnd/NestList/DndNestList.types";

export interface JobEditProps {
  section: JobSection;
  dispatch: React.Dispatch<ActionType<RenderableSection>>;
  sections: RenderableSection[];
}
