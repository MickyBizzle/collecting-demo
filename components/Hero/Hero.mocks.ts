import { HeroType } from './Hero.type';

const base: HeroType = {
  img: {
    src: 'https://images.collectingcars.com/editorial/banners/bicester2_notext.jpg?fit=crop&ar=9:2&w=700&q=75&crop=left%20700w,%20https://images.collectingcars.com/editorial/banners/bicester2_notext.jpg?fit=crop&w=1200&q=95',
    alt: 'car',
  },
  text: 'Some text here',
  link: '/',
};

export const mockHeroProps = {
  base,
};
