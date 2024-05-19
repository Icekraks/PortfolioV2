export type RootLoaderData = {
  navigation: {
    header: Navigation;
    footer: Navigation;
  };
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
