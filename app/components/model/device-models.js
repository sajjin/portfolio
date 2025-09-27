import google_home from '~/assets/google_home.glb';
import impreza from '~/assets/impreza.glb';
import iphone_11 from '~/assets/iphone-11.glb';
import laptop from '~/assets/macbook-pro.glb';

export const ModelAnimationType = {
  SpringUp: 'spring-up',
  LaptopOpen: 'laptop-open',
};

export const deviceModels = {
  laptop: {
    url: laptop,
    width: 374,
    height: 512,
    position: { x: 0, y: 0, z: 0 },
    LaptopOpen: 'laptop-open',
  },
  google_home: {
    url: google_home,
    width: 374,
    height: 512,
    position: { x: 0, y: 0, z: 0 },
  },
  impreza: {
    url: impreza,
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
  },
  iphone_11: {
    url: iphone_11,
    width: 374,
    height: 512,
    position: { x: 0, y: 0, z: 0 },
  },
};
