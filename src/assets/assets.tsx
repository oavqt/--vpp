import { v4 as uuidv4 } from 'uuid';
import vdark from './images/vdark.png';
import vlogo from './images/vlogo.png';
import vlight from './images/vlight.png';
import vpurple from './images/vpurple.png';
import retop from './gifs/retop.gif';
import rtop from './gifs/rtop.gif';
import sctop from './gifs/sctop.gif';
import tdtop from './gifs/tdtop.gif';

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
        technologies: ['css', 'html', 'js', 'react', 'typescript'],
        tools: ['jest', 'npm', 'webpack']
      },
      timeline: {
        description: {
          body: 'hello, observers. although, i am just beginning to understand the world of development, the following timeline showcases what technologies i have learned along with the projects that helped me learn those technologies. i am confident that i have learned a great deal and will continue to learn throughout my life.',
          title: 'timeline\\⤥'
        },
        markers: [
          {
            technology: 'css\\html',
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
            technology: 'css\\html\\js',
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
                  path: 'https://github.com/ortizqtv'
                }
              }
            ]
          },
          {
            technology: 'react\\typescript',
            projects: [
              {
                project: {
                  title: '017-retop',
                  path: 'https://github.com/ortizqtv/017-retop'
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
            technology: 'node\\react\\typescript',
            projects: [
              {
                project: {
                  title: '018-sctop',
                  path: 'https://github.com/ortizqtv/018-sctop'
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
        title: 'hyperbolic time chamber\\⤥',
        body: "hello, observers. i have used these projects as a means of learning, testing, and researching new technologies and methods of development. \\ 'error messages'"
      },
      display: [
        {
          assets: {
            image: {
              alt: '018-sctop',
              src: sctop
            },
            technologies: 'node\\react\\typescript'
          },
          description: {
            body: 'hello, observers. 018-sctop is a project focused on using react, typescript, and node to build a fully functional ecommerce website.',
            title: '018-sctop'
          },
          internal: {
            active: false,
            empty: false,
            inactive: false
          },
          external: {
            code: {
              message: 'code',
              path: 'https://github.com/ortizqtv/018-sctop'
            },
            website: {
              message: '',
              path: 'https://github.com/ortizqtv/018-sctop'
            }
          }
        },
        {
          assets: {
            image: {
              alt: '017-retop',
              src: retop
            },
            technologies: 'react\\typescript'
          },
          description: {
            body: 'hello, observers. 017-retop is a project that is focused on building resumes using react and typescript.',
            title: '017-retop'
          },
          internal: {
            active: false,
            empty: false,
            inactive: false
          },
          external: {
            code: {
              message: 'code',
              path: 'https://github.com/ortizqtv/017-retop'
            },
            website: {
              message: 'demo',
              path: 'https://ortizqtv.github.io/017-retop/'
            }
          }
        },
        {
          assets: {
            image: {
              alt: '014-tdtop',
              src: tdtop
            },
            technologies: 'css\\html\\js'
          },
          description: {
            body: 'hello, observers. 014-tdtop is a project that uses react and typescript to build a todo application.',
            title: '014-tdtop'
          },
          internal: {
            active: false,
            empty: false,
            inactive: false
          },
          external: {
            code: {
              message: 'code',
              path: 'https://github.com/ortizqtv/014-tdtop'
            },
            website: {
              message: 'demo',
              path: 'https://ortizqtv.github.io/014-tdtop/'
            }
          }
        },
        {
          assets: {
            image: {
              alt: '013-rtop',
              src: rtop
            },
            technologies: 'css\\html\\js'
          },
          description: {
            body: 'hello, observers. 013-retop is a project that is focused on using css, javascript, and html to build a template for a ecommerce website.',
            title: '013-rtop'
          },
          internal: {
            active: false,
            empty: false,
            inactive: false
          },
          external: {
            code: {
              message: 'code',
              path: 'https://github.com/ortizqtv/013-rtop'
            },
            website: {
              message: 'demo',
              path: 'https://ortizqtv.github.io/013-rtop/'
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
