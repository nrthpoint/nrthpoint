import { GlobalData, Work } from "@/types/data";

const GLOBAL_QUERY = `
  query globalEntryQuery {
    global(id: "4jPxs0J7phTTuBlRH7c2K6") {
      title
      homeTagline
      introduction {
        json
      }
      featuredProjectsCollection {
        items {
          title
          description
          homepageAction
          url
          hero {
            desktop {
              url
            }
            mobile {
              url
            }
          }
        }
      }
      waysOfWorkingHeader
      projectsCollection {
        items {
          previewImage {
            url
          }
          title
          description
          homepageAction
          url
          hero {
            desktop {
              url
            }
            mobile {
              url
            }
          }
        }
      }
      servicesHeading
      servicesIntroduction
      servicesCollection {
        items {
          name
          description
          icon {
            url
          }
        }
      }
      waysOfWorkingIntroduction
      waysOfWorkingCollection {
        items {
          name
          description
          icon {
            url
          }
        }
      }
      footer {
        json
      }
    }
  }
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
      title
    url
    featured
    hero {
      desktop {
        url
      }
      mobile {
        url
      }
    }
    galleryCollection {
      items {
        title
        description
      }
    }
    description
    content {
      json
    }
    tags
    link
  
    }
  }
}
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

const WORK_FIELDS_FRAGMENT = `
fragment WorkFields on Work {
  title
  url
  featured
  hero {
    desktop {
      url
    }
    mobile {
      url
    }
  }
  galleryCollection {
    items {
      title
      description
      url
    }
  }
  description
  content {
    json
  }
  tags
  link
}
`;

const WORK_ITEM_QUERY = (id: string) => `
{
  work(id: "${id}") {
    ...WorkFields
  }
}
${WORK_FIELDS_FRAGMENT}
`;

const WORK_ITEM_BY_SLUG_QUERY = (slug: string) => `
{
  workCollection(where: {url: "${slug}"}) {
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
      body: JSON.stringify({ query }),
      next: { tags: ["posts"] },
    }
  ).then((response) => response.json());
}

export async function getGlobalContent() {
  const data = await fetchGraphQL(GLOBAL_QUERY, false);
  return data?.data?.global as GlobalData;
}

export async function getFooterContent() {
  const data = await fetchGraphQL(FOOTER_QUERY, false);
  return data?.data?.global.footer.json;
}

export async function getMetaData() {
  const data = await fetchGraphQL(META_QUERY, false);
  return data?.data?.global as GlobalData;
}

export async function getWorkItemById(id: string) {
  const data = await fetchGraphQL(WORK_ITEM_QUERY(id), false);
  return data?.data?.work as Work;
}

export async function getWorkItemBySlug(slug: string) {
  const data = await fetchGraphQL(WORK_ITEM_BY_SLUG_QUERY(slug), false);
  return data?.data?.workCollection.items[0] as Work;
}

export async function getAllWorkItemSlugs() {
  const data = await fetchGraphQL(ALL_WORK_ITEM_SLUGS_QUERY, false);
  return data?.data?.workCollection.items as Pick<Work, "url">[];
}

export async function getAllWorkItems() {
  const data = await fetchGraphQL(ALL_WORK_ITEMS_QUERY, false);
  return data?.data?.workCollection.items as Work[];
}
