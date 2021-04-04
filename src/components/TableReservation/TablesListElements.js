import styled from 'styled-components';

export const TablesListContainer = styled.div`
    background: linear-gradient(45deg, #222, 20%, #555);
    color: #fff;
    border: 0.2rem solid #888;
`;

export const TablesListHeading = styled.div`
    font-size: 2.5rem;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-bottom: 5rem;
`;

export const TablesListSortContent = styled.div`
    margin-left: 1rem;
    margin-bottom: 2rem;
`;

export const TablesListSortLabel = styled.label`
  font-size: 1.2rem;
`;

export const TablesListSortOptions = styled.select`
  background: transparent;
  color: #fff;
  border: none;
  border-bottom: 1px solid rgba(255,200,0,8);
  font-size: 1.2rem;
`;

export const TablesListSortOptionsItem = styled.option`
  background: #555;
`;

export const TablesListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin: 0 auto 1rem 1rem;
`;

export const TablesListCard = styled.div`
    line-height: 1.3;
    width: 330px;
    border: 0.2rem solid #555;
    background: #171010;
    margin: 0.4rem;
`;

export const TablesListInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-align: center;
`;

export const TablesListImg = styled.img`
    min-width: 120px;
    max-width: 100%;
    box-shadow: 8px 8px #CCB03D;
`;

export const TablesListTitle = styled.div`
    margin-top: 1rem;
    margin-bottom: 0.6rem;
    font-weight: bold;
    font-size: 1.9rem;
`;

export const TablesListP = styled.p`
    font-size: 1.3rem;
    text-decoration: underline;
    font-weight: 400;
    margin-bottom: 0.8rem;
`;

export const TablesListHourly = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const TablesListHourlyItem = styled.div`
    font-size: 1.15rem;
    color: #bbb;
`;

export const TablesListHourlyItemLabel = styled.span`
    color: ${({ isDispo }) => (isDispo ? '#B87A7A' :'#94B87A')};
`;

export const TablesListBtn = styled.button`
    margin-top: 2rem;
    font-size: 1rem;
    padding: 1rem 5rem;
    border: none;
    background: #CCB03D;
    text-decoration: none;
    color: #fff;

    &:hover {
        background: #fff;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`;