import { v4 as uuidv4 } from 'uuid';

const assets = {
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
      title: "l'eh lo'lo'lo'lo"
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
};

export default assets;
