import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";



function AdminUser () {

    const [datas,setDatas]=useState([]);
    
    useEffect(() => {

        console.log('eff');

        //초기데이터 받기
        axios.get('/admin/user')
        .then((res)=>{
            console.log(res.data);
            setDatas(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });

    },[]);

    const Del= (delId) => {

        //삭제 할 게시판 idx 보내기
        axios.post('/admin/user/delete',
        {id:delId})
        .then((res)=>{
            console.log(res.data)
            if(!res.data){
                alert('삭제에 실패했습니다.');
            }
            else{
                window.location.reload();
            }
        })
        .catch((err)=>{
            console.log(err);
        });

        return;

    }

    const printUser = () => {
        const result = [];
    
        if(datas.length !== 0){
        for(let i=0; i < datas.length ; i++){
           result.push( 
           <Box>
                <Info>
                    <Title>{datas[i].id}</Title>
                    <Title>{datas[i].age}</Title>
                    <Title>{datas[i].unm}</Title>
                </Info>
                <DelBtn onClick={()=>{ Del(datas[i].id); }}><Title>삭제</Title></DelBtn>
            </Box>
           )
        }
    }
        return result;
    }

    return (
        <ScrBox>
            {datas.length === 0 ? <Box><Title style={{color:'gray'}}>회원이 없습니다.</Title></Box> : printUser()}
        </ScrBox>
      
    );
}

export default AdminUser;

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

