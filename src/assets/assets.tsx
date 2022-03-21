import { v4 as uuidv4 } from 'uuid';

const assets = {
  pages: {
    about: {
      description: {
        title: 'dieu te bénisse',
        body: 'je remercie mon dieu à chaque souvenir de toi, que dieu te bénisse je remercie mon dieu à chaque souvenir de toi, que dieu te bénisse'
      },
      images: [
        {
          alt: 'about-description',
          description: 'about-description',
          id: uuidv4(),
          src: ''
        }
      ],
      technology: {},
      timeline: {}
    },
    home: {
      landing: {
        images: [
          { alt: 'about', description: 'about', id: uuidv4(), src: '' },
          { alt: 'contact', description: 'contact', id: uuidv4(), src: '' },
          {
            alt: 'projects',
            description: 'projects',
            id: uuidv4(),
            src: ''
          }
        ],
        welcome: {
          title: 'dieu te bénisse'
        }
      }
    },
    routes: {
      navigation: [
        { desciption: 'about', path: 'about' },
        { desciption: 'contact', path: 'contact' },
        { desciption: 'home', path: '/' },
        { desciption: 'projects', path: 'projects' }
      ]
    }
  }
};

export default assets;
