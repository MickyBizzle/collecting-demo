import styled from '@emotion/styled';

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 85px;
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 0 50px;
  box-sizing: border-box;
`;

export const LeftCol = styled.div`
  flex: 1;
`;
export const RightCol = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  * {
    margin-left: 16px;
  }
`;
