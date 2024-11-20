import { Document } from "@contentful/rich-text-types";

type Media = {
  url: string;
};

type Project = {
  title: string;
  description: string;
  url: string;
  hero: {
    desktop: Media;
    mobile: Media;
  };
  homepageAction: string;
  previewImage: Media;
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
    items: Project[];
  };
  waysOfWorkingCollection: {
    items: WayOfWorking[];
  };
  featuredProjectsCollection: {
    items: Project[];
  };
};

export type Work = {
  id: string;
  title: string;
  url: string;
  featured: boolean;
  hero: {
    desktop: {
      url: string;
    };
    mobile: {
      url: string;
    };
  };
  galleryCollection: {
    items: {
      title: string;
      description: string;
      url: string;
    }[];
  };
  description: string;
  content: {
    json: Document;
  };
  tags: string[];
  link: string;
};
