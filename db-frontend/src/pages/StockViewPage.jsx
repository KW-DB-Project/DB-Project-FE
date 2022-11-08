import styled from "styled-components";

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  width:60%;
  padding-top: 160px;
  margin: 0 auto;
`;

const Container = styled.div`
  display: grid;
  margin: 0 auto;
  width:80%;
  grid-template-columns : repeat(2, 1fr); 
  justify-content : space-between;
  gap: 50px;
  margin-top: 25px;
`;

const Box = styled.div`
  background-color: transparent;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.defaultShadow};
  height: 850px;
  padding: 20px;
`;

const SubNav = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  font-size:20px;
  background-color: rgba(0,0,0,0.2);
  border-radius:15px;
  padding: 0 5px;
  margin-left: 10px;
  h3{
    font-weight: 600;
  }
`;


function StockViewPage(){
  return (
  <MainBox>
    <Container>
      <Box>
      </Box>
      <Box/>
    </Container>
  </MainBox>
  );
}

export default StockViewPage;