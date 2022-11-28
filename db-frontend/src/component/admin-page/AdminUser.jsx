import { useEffect } from "react";
import styled from "styled-components";

function AdminUser () {

    /*
    useEffect(() => {

        //초기데이터 받기
        axios.post('/',
        {id:login.id})
        .then((res)=>{
            console.log(res.data)
            setDatas(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });

    },[]);*/

    const Del= (delId) => {

        alert(delId);


        //삭제 할 게시판 idx 보내기
        /*
        axios.post('/',
        {idx:delIdx})
        .then((res)=>{
            console.log(res.data)
            if(!res.data){
                alert('삭제에 실패했습니다.');
            }
        })
        .catch((err)=>{
            console.log(err);
        });*/

        return;

    }

    const printUser = () => {
        const result = [];
    
        for(let i=0; i < 10 ; i++){
           result.push( 
           <Box>
                <Info>
                    <Title>아이디</Title>
                    <Title>닉네임</Title>
                    <Title>나이</Title>
                </Info>
                <DelBtn onClick={()=>{ Del(i); }}><Title>삭제</Title></DelBtn>
            </Box>
           )
        }

        return result;
    }

    return (
        <ScrBox>
            {printUser()}
        </ScrBox>
      
    );
}

export default AdminUser;

//
const IdxInput = styled.input`

`;

//스크롤 페이지
const ScrBox = styled.div`
overflow:auto;
height:600px;
`;

//스타일 레이아웃
const Box = styled.div`
border-radius: 50px 50px 50px 50px;
box-shadow: ${(props) => props.theme.defaultShadow};
padding:10px;
width:90%;
display:flex;
align-items:center;
margin:2%;
`;

//정보 레이아웃
const Info = styled.div`
display:flex;
width:100%;
padding:1%;
text-algin:center;
`;

//버튼 레이아웃
const DelBtn = styled.button`
width:10%;
background-color: black;
color:white;
border:none;
padding:7px;
border-radius:30px;
`;

//글자 속성
const Title = styled.div`
font-size:100%;
margin:5px;
`;

