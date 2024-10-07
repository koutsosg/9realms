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
export const generateBlankItem = (type: string) => {
  switch (type) {
    case "job":
      return {
        id: crypto.randomUUID(),
        company: "Wild Wild Web",
        company_url: "https://www.wildwildweb.gr/en/",
        country: "Greece",
        date_end: "",
        date_start: "2023-11-01 00:00:00.000Z",
        description: {},
        position: "React Ecosystem Developer",
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
