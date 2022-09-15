import styled from '@emotion/styled';

export const HeroContainer = styled.div`
  width: 100%;
  height: 250px;
  margin: 0 auto;
  max-width: 1300px;
  overflow: hidden;
  position: relative;
  border-radius: 0 0 10px 10px;
`;

export const HeroText = styled.span`
  position: absolute;
  color: white;
  font-family: lato;
  text-decoration: none;
  font-size: 32px;
  bottom: 40%;
  left: 5%;
`;

export const Gradient = styled.div`
  position: absolute;
  background-image: ${({ theme }) => `linear-gradient(
    to right,
    ${theme.colors.blue},
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  )`};
  width: 100%;
  height: 100%;
`;
