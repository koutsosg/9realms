import {
  RenderableSection,
  SimplifiedDescription,
} from "@/app/lib/utils/CVService.types";
import { ActionType } from "@/app/components/Dnd/NestList/DndNestList.types";

export interface DescriptionListProps {
  items: SimplifiedDescription;
  dispatch: React.Dispatch<ActionType<RenderableSection>>;
  sectionId: string;
  sections: RenderableSection[];
  itemId: string;
}
