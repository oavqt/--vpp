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
          body: "hello, observers. my name is victor ortiz. after doing odd jobs all my life, i decided last year to invest in my future by learning how to solve, develop, and implement solutions to the deep mysteries of development. on my journey to understanding development, i've learned many technologies and methods that have enabled me to do things like generate error messages, create infinite loops, and my biggest achievement to date, centering divs...yes, yes, yes...i know it's quite impressive. although centering a div may seem like a very impressive accomplishment, i'm just beginning my journey of understanding the world of development. i'm constantly learning, testing, and researching new technologies and methods to help me solve the mysteries of development.  nevertheless, i should get back to researching new ways of breaking things. if you have any questions, please let me know. i'm always happy to help anyone and everyone.",
          title: 'log\\⤥'
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
          body: "hello, observers. i'm constantly learning, testing, and researching new technologies and methods to help me solve the mysteries of development. however, these are some of the technologies i have used to build a solid foundation and understanding of the development world.",
          title: 'technology\\⤥'
        },
        technologies: ['html', 'css', 'js', 'react', 'typescript'],
        tools: ['webpack', 'npm', 'jest']
      },
      timeline: {
        description: {
          body: 'hello, observers. although, i am just beginning to understand the world of development, the following timeline showcases what technologies i have learned along with the projects that helped me learn those technologies. i am confident that i have learned a great deal and will continue to learn throughout my life.',
          title: 'timeline\\⤥'
        },
        markers: [
          {
            technology: 'html / css',
            projects: [
              {
                project: {
                  title: '002-tpfcc',
                  path: 'https://github.com/ortizqtv/002-tpfcc'
                }
              },
              {
                project: {
                  title: '003-surveyfcc',
                  path: 'https://github.com/ortizqtv/003-surveyfcc'
                }
              },
              {
                project: {
                  title: '004-plpfcc',
                  path: 'https://github.com/ortizqtv/004-plpfcc'
                }
              },
              {
                project: {
                  title: '005-tdpfcc',
                  path: 'https://github.com/ortizqtv/005-tdpfcc'
                }
              },
              {
                project: {
                  title: '006-googlehtop',
                  path: 'https://github.com/ortizqtv/006-googlehtop'
                }
              },
              {
                project: {
                  title: '007-googlesptop',
                  path: 'https://github.com/ortizqtv/007-googlesptop'
                }
              }
            ]
          },
          {
            technology: 'html / css / js',
            projects: [
              {
                project: {
                  title: '008-rpstop',
                  path: 'https://github.com/ortizqtv/008-rpstop'
                }
              },
              {
                project: {
                  title: '009-eastop',
                  path: 'https://github.com/ortizqtv/009-eastop'
                }
              },
              {
                project: {
                  title: '010-calctop',
                  path: 'https://github.com/ortizqtv/010-calctop'
                }
              },
              {
                project: {
                  title: '011-ltop',
                  path: 'https://github.com/ortizqtv/011-ltop'
                }
              },
              {
                project: {
                  title: '012-tttop',
                  path: 'https://github.com/ortizqtv/012-tttop'
                }
              },
              {
                project: {
                  title: '013-rtop',
                  path: 'https://github.com/ortizqtv/013-rtop'
                }
              },
              {
                project: {
                  title: '014-tdtop',
                  path: 'https://github.com/ortizqtv/014-tdtop'
                }
              },
              {
                project: {
                  title: '015-watop',
                  path: 'https://github.com/ortizqtv/015-watop'
                }
              },
              {
                project: {
                  title: '016-bstop',
                  path: 'https://github.com/ortizqtv/016-bstop'
                }
              },
              {
                project: {
                  title: '--vtemplate',
                  path: 'https://github.com/ortizqtv/--vtemplate'
                }
              }
            ]
          },
          {
            technology: 'react',
            projects: [
              {
                project: {
                  title: '...',
                  path: '...'
                }
              }
            ]
          },
          {
            technology: 'react \\ typescript',
            projects: [
              {
                project: {
                  title: '017-retop',
                  path: 'https://github.com/ortizqtv/017-retop'
                }
              },
              {
                project: {
                  title: '018-sctop',
                  path: 'https://github.com/ortizqtv/018-sctop'
                }
              },
              {
                project: {
                  title: '--vpp',
                  path: 'https://github.com/ortizqtv/--vpp'
                }
              }
            ]
          },
          {
            technology: '...',
            projects: [
              {
                project: {
                  title: '...',
                  path: '...'
                }
              }
            ]
          }
        ]
      }
    },
    contact: {
      landing: {
        message: {
          primary: 'ortizqtv@gmail.com\\⤥',
          secondary: 'dieu te bénisse'
        },
        social: [
          {
            title: 'github',
            path: 'https://github.com/ortizqtv'
          },
          {
            title: 'twitter',
            path: 'https://twitter.com/ortizqtv'
          },
          {
            title: 'linkedin',
            path: 'https://www.linkedin.com/in/ortizqtv/'
          }
        ]
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
          primary: 'welcome\\⤥'
        }
      }
    },
    projects: {
      description: {
        title: 'projects\\⤥',
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
