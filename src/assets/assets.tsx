import { v4 as uuidv4 } from 'uuid';
import vdark from './images/vdark.png';
import vlogo from './images/vlogo.png';
import vlight from './images/vlight.png';
import vpurple from './images/vpurple.png';

const assets = {
  pages: {
    about: {
      information: {
        description: {
          title: 'dieu te bénisse',
          body: 'je remercie mon dieu à chaque souvenir de toi, que dieu te bénisse je remercie mon dieu à chaque souvenir de toi, que dieu te bénisse'
        },
        images: [
          {
            alt: 'about-information',
            description: 'about-information',
            id: uuidv4(),
            src: vlogo
          }
        ]
      },
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
        message: {
          primary: 'ortizqtv@gmail.com',
          secondary: 'dieu te bénisse'
        }
      }
    },
    home: {
      landing: {
        images: [
          { alt: 'about', description: 'about', id: uuidv4(), src: vlight },
          {
            alt: 'contact',
            description: 'contact',
            id: uuidv4(),
            src: vpurple
          },
          {
            alt: 'home',
            description: 'home',
            id: uuidv4(),
            src: vlogo
          },
          {
            alt: 'projects',
            description: 'projects',
            id: uuidv4(),
            src: vdark
          }
        ],
        message: {
          primary: 'allo'
        }
      }
    },
    projects: {
      description: {
        title: 'dieu te bénisse',
        body: 'je remercie mon dieu à chaque souvenir de toi, que dieu te bénisse je remercie mon dieu à chaque souvenir de toi, que dieu te bénisse'
      },
      display: [
        {
          assets: {
            image: {
              alt: 'dieu te bénisse',
              src: 'dieu te bénisse'
            },
            technology: [
              {
                alt: 'dieu te bénisse',
                src: 'dieu te bénisse'
              }
            ]
          },
          description: {
            body: 'je remercie mon dieu à chaque souvenir de toi, que dieu te bénisse je remercie mon dieu à chaque souvenir de toi, que dieu te bénisse',
            title: 'dieu te bénisse'
          },
          internal: {
            active: false,
            empty: false,
            inactive: false
          },
          external: {
            code: {
              message: 'dieu te bénisse',
              path: 'dieu te bénisse'
            },
            website: {
              message: 'dieu te bénisse',
              path: 'dieu te bénisse'
            }
          }
        },
        {
          assets: {
            image: {
              alt: 'dieu te bénisse',
              src: 'dieu te bénisse'
            },
            technology: [
              {
                alt: 'dieu te bénisse',
                src: 'dieu te bénisse'
              }
            ]
          },
          description: {
            body: 'je remercie mon dieu à chaque souvenir de toi, que dieu te bénisse je remercie mon dieu à chaque souvenir de toi, que dieu te bénisse',
            title: 'dieu te bénisse'
          },
          internal: {
            active: false,
            empty: false,
            inactive: false
          },
          external: {
            code: {
              message: 'dieu te bénisse',
              path: 'dieu te bénisse'
            },
            website: {
              message: 'dieu te bénisse',
              path: 'dieu te bénisse'
            }
          }
        },
        {
          assets: {
            image: {
              alt: 'dieu te bénisse',
              src: 'dieu te bénisse'
            },
            technology: [
              {
                alt: 'dieu te bénisse',
                src: 'dieu te bénisse'
              }
            ]
          },
          description: {
            body: 'je remercie mon dieu à chaque souvenir de toi, que dieu te bénisse je remercie mon dieu à chaque souvenir de toi, que dieu te bénisse',
            title: 'dieu te bénisse'
          },
          internal: {
            active: false,
            empty: false,
            inactive: false
          },
          external: {
            code: {
              message: 'dieu te bénisse',
              path: 'dieu te bénisse'
            },
            website: {
              message: 'dieu te bénisse',
              path: 'dieu te bénisse'
            }
          }
        }
      ]
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
