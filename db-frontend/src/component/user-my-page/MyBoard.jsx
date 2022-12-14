import { useEffect, useState } from "react";
import styled from "styled-components";
import {useRecoilValue} from "recoil";
import { isLoginedAtom } from '../../atom/loginAtom';
import axios from "axios";
import { NavLink } from "react-router-dom";

function MyBoard () {

    const [datas,setDatas] = useState([]);
    const login = useRecoilValue(isLoginedAtom);

    useEffect(() => {
       
        //관심
        axios
        .post('/user/myWriting', {
          id:login.id
        })
        .then((res) => {
          console.log("내가 쓴 글");
          setDatas(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  
      },[]);
    
    const printStock = () => {

        const result = [];

        for(var i =0 ; i <datas.length ; i++){ 

          let url='/debate/'+datas[i].stkNm+'/'+datas[i].idx;

        result.push( <NavLink to={url}>
            <GrayMargin>
            <GrayLayout>
              <LittleTitle style={{fontWeight:'bold'}}>{'['}{datas[i].stkNm}{']'}</LittleTitle><LittleTitle>{datas[i].title}</LittleTitle><RightLayout><LittleTitle>{datas[i].createDate.substr(0,10)}</LittleTitle></RightLayout>
            </GrayLayout>
          
            </GrayMargin>  </NavLink>
        )
        }
        return result;
    }

    return(
<div className="likeStockPage">
<StyledLayout>
    <Box>
        <Title>내가 쓴 글</Title><RightLayout></RightLayout>
    </Box>
    <ScrBox>
      {printStock()}
    </ScrBox>
    <div style={{marginBottom:'20px'}}/>
</StyledLayout>
</div>
    );
}

export default MyBoard;

//스타일 레이아웃
const StyledLayout = styled.div`
margin-top:30px;
border-radius: 50px 50px 50px 50px;
box-shadow: ${(props) => props.theme.defaultShadow};
padding:10px;
`;

//레이아웃
const Box =styled.div`
display:flex;
padding:10px;
margin:10px;
`;

//회색 박스 간격
const GrayMargin = styled.div`
display:flex;
margin-left:10px;
margin-right:10px;
margin-bottom:10px;
`;

//오른 정렬 레이아웃
const RightLayout = styled.div`
  width:40%;
  height:40px;
  text-align:right;
    margin-left:auto;
`;

//제목
const Title = styled.div`
  font-size:25px;
  margin-top:3px;
  margin-left:5px;
  font-weight:bold;
`;

//소제목
const LittleTitle = styled.div`
font-size:15px;
margin-top:3px;
margin-left:5px;
`;

//회색 레이아웃
const GrayLayout =styled.div`
width:100%;
height:50px;
border-radius: 15px;
background-color:rgb(217,217,217);
padding:15px;
display:flex;
`;

//스크롤 페이지
const ScrBox = styled.div`
overflow:auto;
height:180px;
`;