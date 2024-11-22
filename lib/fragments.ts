export const WORK_FIELDS_FRAGMENT = `
fragment WorkFields on Work {
  title
  url
  featured
  previewImage {
    url
  }
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
  homepageAction
  description
  content {
    json
  }
  tags
  link
}
`;

export const WORK_FIELDS_PREVIEW_FRAGMENT = `
fragment WorkFieldsPreview on Work {
  title
  url
  featured
  previewImage {
    url
  }
  hero {
    desktop {
      url
    }
    mobile {
      url
    }
  }
  homepageAction
  description
  link
}
`;

export const SERVICE_ITEM_FIELDS_FRAGMENT = `
fragment ServiceItemFields on Service {
  name
  description
  icon {
    url
  }
}
`;
