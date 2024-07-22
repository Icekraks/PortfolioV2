export type RootLoaderData = {
  navigation: {
    header: Navigation;
    footer: Navigation;
  };
  social: {
    email: string;
    linkedin: string;
    github: string;
    youtube: string;
  };
  }
};

export type Navigation = {
  title: string;
  links: Link[];
};

export type Link = {
  title: string;
  link: string;
  external: boolean;
};
