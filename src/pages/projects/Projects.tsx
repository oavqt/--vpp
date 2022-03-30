type ProjectsObject = {
  assets: {
    image: {
      alt: string;
      src: string;
    };
    technology: {
      alt: string;
      src: string;
    }[];
  };
  description: {
    body: string;
    title: string;
  };
  external: {
    code: {
      message: string;
      path: string;
    };
    website: {
      message: string;
      path: string;
    };
  };
};

export default ProjectsObject;
