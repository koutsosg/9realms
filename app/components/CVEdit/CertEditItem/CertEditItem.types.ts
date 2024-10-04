import {
  CertificationSection,
  RenderableSection,
} from "@/app/lib/utils/CVService.types";
import { ActionType } from "@/app/components/Dnd/NestList/DndNestList.types";

export interface CertificationEditProps {
  section: CertificationSection;
  dispatch: React.Dispatch<ActionType<RenderableSection>>;
  sections: RenderableSection[];
}
