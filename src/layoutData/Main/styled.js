import styled from "styled-components";

export const MainBox = styled.div`
  display: grid;
  background: ${({ theme }) => theme.color.mercury};
  border-radius: 3px;
  padding: 20px;
  grid-gap: 3px;
  overflow-y: scroll;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 1672px) and (max-width: 2248px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    grid-template-columns: 1fr;
    gap: 5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    max-width: 320px;
  }
`;

export const DataList = styled.ul`
  display: flex;
  max-width: 400px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  padding: 30px;
  justify-content: center;
  align-items: center;
`;

export const Tile = styled.ul`
  margin: 0 auto;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 8px 7px 23px -3px rgba(66, 68, 90, 1);
  border: 6px solid rgba(209, 213, 218, 0.1);
  border-radius: 5px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.025);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    margin: 0 auto;

    &:hover {
      transform: scale(1);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    max-width: 320px;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 12px;
  }
`;

export const Source = styled.span`
  display: flex;
  background-color: ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.black};
  padding: 5px;
  border-radius: 5px;
  gap: 5px;
  justify-content: center;
  margin-bottom: 3px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    font-size: 10px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 8px;
  }
`;

export const PublishedAt = styled.span`
  display: flex;
  background-color: ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.black};
  padding: 5px;
  border-radius: 5px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    font-size: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 8px;
  }
`;

export const Image = styled.img`
  aspect-ratio: 3/4;
`;
