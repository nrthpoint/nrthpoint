import { Document } from "@contentful/rich-text-types";

type Media = {
  url: string;
  title?: string;
  description?: string;
};

export type Service = {
  name: string;
  description: string;
  icon?: Media | null;
};

export type WayOfWorking = {
  name: string;
  description: string;
  icon?: Media;
};

export type GlobalData = {
  title: string;
  homeTagline: string;
  introduction: {
    json: Document;
  };
  footer: {
    json: Document;
  };
  waysOfWorkingHeader: string;
  servicesHeading: string;
  servicesIntroduction: string;
  waysOfWorkingIntroduction: string;
  servicesCollection: {
    items: Service[];
  };
  projectsCollection: {
    items: WorkPreview[];
  };
  waysOfWorkingCollection: {
    items: WayOfWorking[];
  };
  featuredProjectsCollection: {
    items: WorkPreview[];
  };
};

export type WorkPreview = {
  id: string;
  title: string;
  url: string;
  featured: boolean;
  previewImage: Media;
  hero: {
    desktop: Media;
    mobile: Media;
  };
  description: string;
  homepageAction: "None" | "Project Page" | "Direct";
  tags: string[];
  link: string;
};

export type Work = {
  id: string;
  title: string;
  url: string;
  featured: boolean;
  previewImage: Media;
  hero: {
    desktop: Media;
    mobile: Media;
  };
  galleryCollection: {
    items: Media[];
  };
  description: string;
  homepageAction: "None" | "Project Page" | "Direct";
  content: {
    json: Document;
  };
  tags: string[];
  link: string;
};
