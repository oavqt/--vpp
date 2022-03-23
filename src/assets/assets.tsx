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
      technology: {
        description: {
          title: 'dieu te bénisse',
          body: 'je remercie mon dieu à chaque souvenir de toi, que dieu te bénisse je remercie mon dieu à chaque souvenir de toi, que dieu te bénisse'
        },
        images: [
          {
            alt: 'about-technology-0',
            description: 'about-technology-0',
            id: uuidv4(),
            src: ''
          }
        ]
      },
      timeline: {
        description: {
          title: 'dieu te bénisse',
          body: 'je remercie mon dieu à chaque souvenir de toi, que dieu te bénisse je remercie mon dieu à chaque souvenir de toi, que dieu te bénisse'
        },
        images: [
          {
            alt: 'about-timeline-0',
            description: 'about-timeline-0',
            id: uuidv4(),
            src: ''
          }
        ]
      }
    },
    contact: {
      landing: {
        images: [
          { alt: 'github', description: 'github', id: uuidv4(), src: '' },
          { alt: 'twitter', description: 'twitter', id: uuidv4(), src: '' },
          {
            alt: 'linkedin',
            description: 'linkedin',
            id: uuidv4(),
            src: ''
          }
        ],
        welcome: {
          title: 'dieu te bénisse'
        }
      }
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
