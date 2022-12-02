import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import axios from "axios";
import {useRecoilValue} from "recoil";
import { isLoginedAtom } from '../../atom/loginAtom';

function AdminBoard () {

    const [wrSearch,setwrSearch]=useState('');
    const [sname,setSname]=useState('삼성전자');
    const [datas,setDatas]=useState([]);

    const login = useRecoilValue(isLoginedAtom);

    //초기 화면 로그 시 & sname 변할 경우 작동
    useEffect(() => {


        //초기데이터 받기
        axios.post('/admin/community/searchPosts',
        {stockName:sname})
        .then((res)=>{
            setDatas(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });

    },[sname]);

    //삭제 버튼 이벤트
    const Del= (delIdx,i) => {

        //삭제 할 게시판 idx 보내기
        axios.post('/admin/community/postDelete',
        {idx:delIdx})
        .then((res)=>{
            console.log(res.data.isSuccess)
            if(!res.data.isSuccess){
                alert('삭제에 실패했습니다.');
            }
            else{
                datas.splice(i,1);
            }
        })
        .catch((err)=>{
            console.log(err);
        });

        return;

    }

    //글 배열 출력 함수
    const printBoard = () => {
        const result = [];

        if(datas.length != 0){
    
        for(let i=0; i < datas.length ; i++){
          
           result.push( 
           <Box>
            <HeadCon>
                <Info>
                    <Title>{datas[i].title}</Title>
                    <Title>{datas[i].userId}</Title>
                </Info>
                <DelBtn onClick={() => { Del(datas[i].idx,i); }} ><Title>삭제</Title></DelBtn>
            </HeadCon>
            <StyledLine />
            <Title>{datas[i].content}</Title>
            </Box>
           )
        }
    }

        return result;
    }

    //검색창 입력 이벤트 
    const onChange = (e) => {
        setwrSearch(e.target.value);
      };

      //검색 버튼 클릭 이벤트
    const searchStock = () => {
        setSname(wrSearch);
        setwrSearch('');
      
      }

    return (
        <div>
        <StyledSearchLayout>
        <ComTitle>{sname}</ComTitle>
        <StyledInput type="text" value={wrSearch} onChange={onChange} placeholder="검색" dir="rtl"/>
        <StyledFontawsome icon={faMagnifyingGlass} onClick={searchStock}/> 
      </StyledSearchLayout>
      {datas.length === 0 ?
      <Box>
        <Title style={{color:'gray'}}>게시글이 존재하지 않습니다.</Title>
      </Box>
      :
      
      <ScrBox>
        {printBoard()}
      </ScrBox>}
      </div>
    );
}

export default AdminBoard;

//버튼 레이아웃
const DelBtn = styled.button`
width:10%;
background-color: black;
color:white;
border:none;
border-radius:30px;
`;

//작성자, 제목 묶는
const HeadCon = styled.div`
display:flex;
`;

//분리선
const StyledLine = styled.hr`
size:2;
color:rgb(217,217,217);
`;

//인풋 스타일
const StyledInput = styled.input`
width:60%;
color:black;
font-size:22px;
margin:1%;
border:none;
`;

//검색창
const StyledSearchLayout = styled.div`
height:70px;
border-radius: 30px;
box-shadow: ${(props) => props.theme.defaultShadow};
display:flex;
align-items:center;
`;

//아이콘 스타일
const StyledFontawsome = styled(FontAwesomeIcon)`
width:30px;
height:30px;
margin:2%;
`;

//기업명
const ComTitle = styled.div`
font-size:25px;
font-weight:bold;
margin:2.5%;
text-align:center;
width:40%;
`;

//스크롤 페이지
const ScrBox = styled.div`
overflow:auto;
height:500px;
`;

//스타일 레이아웃
const Box = styled.div`
border-radius: 30px 30px 30px 30px;
box-shadow: ${(props) => props.theme.defaultShadow};
padding:3%;
width:90%;
margin:2%;
`;

//정보 레이아웃
const Info = styled.div`
display:flex;
width:100%;
`;

//글자 속성
const Title = styled.div`
font-size:100%;
margin-top:1%;
margin-right:2%;
`;