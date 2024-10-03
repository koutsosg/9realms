import { RenderableSection } from "./CVService.types";

export const generateBlankSection = (type: string): RenderableSection => {
  switch (type) {
    case "job":
      return {
        id: crypto.randomUUID(),
        title: `New Job section`,
        type: type,
        data: [],
      };

    case "education":
      return {
        id: crypto.randomUUID(),
        title: `New Education section`,
        type: type,
        data: [],
      };

    case "certification":
      return {
        id: crypto.randomUUID(),
        title: `New Certification section`,
        type: type,
        data: [],
      };

    default:
      return {
        id: crypto.randomUUID(),
        title: `New ${type} section`,
        type: type,
        data: [],
      };
  }
};
