import { GlobalData, Work } from "@/types/data";

import {
  SERVICE_ITEM_FIELDS_FRAGMENT,
  WORK_FIELDS_FRAGMENT,
  WORK_FIELDS_PREVIEW_FRAGMENT,
} from "./fragments";

const GLOBAL_QUERY = `
  query globalEntryQuery($preview:Boolean) {
    global(id: "4jPxs0J7phTTuBlRH7c2K6", preview: $preview) {
      title
      homeTagline
      introduction {
        json
      }
      featuredProjectsCollection {
        items {
          ...WorkFieldsPreview
        }
      }
      waysOfWorkingHeader
      projectsCollection {
        items {
          ...WorkFieldsPreview
        }
      }
      servicesHeading
      servicesIntroduction
      servicesCollection {
        items {
          ...ServiceItemFields
        }
      }
      waysOfWorkingIntroduction
      waysOfWorkingCollection {
        items {
          ...ServiceItemFields
        }
      }
      footer {
        json
      }
    }
  }

  ${WORK_FIELDS_PREVIEW_FRAGMENT}
  ${SERVICE_ITEM_FIELDS_FRAGMENT}
`;

const FOOTER_QUERY = `
  query globalEntryQuery {
    global(id: "4jPxs0J7phTTuBlRH7c2K6") {
      footer {
        json
      }
    }
  }
`;

const META_QUERY = `
  query globalEntryQuery {
    global(id: "4jPxs0J7phTTuBlRH7c2K6") {
      title
      homeTagline
    }
  }
`;

const ALL_WORK_ITEMS_QUERY = `
{
  workCollection {
    items {
      ...WorkFields
    }
  }
}
${WORK_FIELDS_FRAGMENT}
`;

const ALL_WORK_ITEM_SLUGS_QUERY = `
{
  workCollection {
    items {
      url
    }
  }
}
`;

const WORK_ITEM_QUERY = (id: string) => `
query workItem($preview: Boolean) {
  {
    work(id: "${id}", preview: $preview) {
      ...WorkFields
    }
  }
}
${WORK_FIELDS_FRAGMENT}
`;

const WORK_ITEM_BY_SLUG_QUERY = (slug: string) => `
query workItem($preview: Boolean) {
  workCollection(where: { url: "${slug}" }, preview: $preview) {
    items {
      ...WorkFields
    }
  }
}
${WORK_FIELDS_FRAGMENT}
`;

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query, variables: { preview } }),
      next: { tags: ["all"] },
    }
  ).then((response) => response.json());
}

export async function getGlobalContent(preview = false) {
  const data = await fetchGraphQL(GLOBAL_QUERY, preview);
  return data?.data?.global as GlobalData;
}

export async function getFooterContent(preview = false) {
  const data = await fetchGraphQL(FOOTER_QUERY, preview);
  return data?.data?.global.footer.json;
}

export async function getMetaData(preview = false) {
  const data = await fetchGraphQL(META_QUERY, preview);
  return data?.data?.global as GlobalData;
}

export async function getWorkItemById(id: string, preview = false) {
  const data = await fetchGraphQL(WORK_ITEM_QUERY(id), preview);
  return data?.data?.work as Work;
}

export async function getWorkItemBySlug(slug: string, preview = false) {
  const data = await fetchGraphQL(WORK_ITEM_BY_SLUG_QUERY(slug), preview);
  return data?.data?.workCollection.items[0] as Work;
}

export async function getAllWorkItemSlugs(preview = false) {
  const data = await fetchGraphQL(ALL_WORK_ITEM_SLUGS_QUERY, preview);
  return data?.data?.workCollection.items as Pick<Work, "url">[];
}

export async function getAllWorkItems(preview = false) {
  const data = await fetchGraphQL(ALL_WORK_ITEMS_QUERY, preview);
  return data?.data?.workCollection.items as Work[];
}
