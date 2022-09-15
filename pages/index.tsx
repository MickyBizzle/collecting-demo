import styled from '@emotion/styled';
import axios from 'axios';
import { Hero } from 'components';
import type { GetServerSideProps, NextPage } from 'next';

// This function is called on the server at request time
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Data from a dummy data API to simulate coming from our backend
  const { data } = await axios.get(`${process.env.API_URL}/products`);
  // Imagine this hero image is coming from a headless CMS
  const hero = {
    img: {
      src: 'https://images.collectingcars.com/editorial/banners/bicester2_notext.jpg',
      alt: 'car',
    },
    text: 'Some text here',
    link: '/',
  };

  // Data gets sent to page as props
  return {
    props: { products: data, hero },
  };
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  span {
    flex-basis: 20%;
    margin-top: 16px;
  }
`;

// Page receives data from getServersideProps as props
const Home: NextPage = ({ products, hero }: any) => {
  return (
    <div>
      <Hero text={hero.text} img={hero.img} link={`/blog/1`} />
      <Container>
        {products.products.map((prod: any) => (
          <span key={prod.id}>{prod.title}</span>
        ))}
      </Container>
    </div>
  );
};

export default Home;
