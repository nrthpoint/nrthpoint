import { Work, WorkPreview } from "@/types/data";

export const getProjectUrl = (workItem: Work | WorkPreview): string => {
  switch (workItem.homepageAction) {
    case "None":
      return "/";
    case "Project Page":
      return `/work/${workItem.url}`;
    case "Direct":
      return workItem.link;
    default:
      throw new Error(`Unsupported homepageAction: ${workItem.homepageAction}`);
  }
};
