import styled from "styled-components";

function BalTab (props) {

    return(
        <div>
        <LittleTitle>{props.bal}원</LittleTitle>
        </div>
    );
}

export default BalTab;

//소제목
const LittleTitle = styled.div`
font-size:15px;
margin-top:3px;
width:30%;
text-algin:right;
`;