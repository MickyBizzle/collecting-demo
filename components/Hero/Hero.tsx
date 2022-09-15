import Image from 'next/image';
import Link from 'next/link';
import { HeroContainer, HeroText, Gradient } from './Hero.style';
import { HeroType } from './Hero.type';

const Hero: React.FC<HeroType> = ({ img, text, link }) => (
  <HeroContainer>
    <Link href={link}>
      <a>
        <Image
          src={img.src}
          alt={img.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="50%"
        />
        <Gradient />
        <HeroText>{text}</HeroText>
      </a>
    </Link>
  </HeroContainer>
);

export default Hero;
