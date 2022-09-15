import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import styled from '@emotion/styled';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

// This function gets called at build time on the server-side.
// It can be called again in a serverless function if revalidation is enabled
export const getStaticProps: GetStaticProps = async (ctx) => {
  const postId = ctx.params?.postId;
  const { data } = await axios.get(`${process.env.API_URL}/posts/${postId}`);
  return {
    props: {
      data,
    },

    // Revalidate every hour
    revalidate: 3600,
  };
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const Post = ({ data }: any) => (
  <Container>
    <h3>{data.title}</h3>
    <p>{data.body}</p>
  </Container>
);

export default Post;
