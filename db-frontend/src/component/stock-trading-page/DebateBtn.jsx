import styled from "styled-components";
import { Link } from "react-router-dom";

function DebateBtn (props) {

    const url='/debate/'+props.sname;

    return (
<StyledBtnLayout>
<DebateLink to={url}>종목토론방 이동</DebateLink>
</StyledBtnLayout>
    );
}

export default DebateBtn;

//검색창
const StyledBtnLayout = styled.div`
height:70px;
border-radius: 30px;
padding:25px;
background-color:black;
text-align:center;
`;

const DebateLink = styled(Link)`
color:white;
font-weight:bold;
font-size:20px;
`;

