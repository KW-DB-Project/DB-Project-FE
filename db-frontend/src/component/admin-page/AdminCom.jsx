import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

function AdminCom () {

    const [addBox,setAddBox]=useState(false);
    const [UPBox,setUPBox]=useState(-1);
    const [inputs, setInputs] = useState({stk_nm:'',stock_stk_cd:'',ls:0,ent_smry:'',category:'',price:0,upnm:'',upSmry:''});
    const {stk_nm,stock_stk_cd,ls,ent_smry,category,price,upnm,upSmry} = inputs; // 비구조화 할당을 통해 값 추출
    const [datas,setDatas]=useState([]);

    //인풋 이벤트 함수
    const onChangeInput= (e) => {
        const {name, value} =e.target; //우선 e.target에서 id와 value 추출
        setInputs({
        ...inputs, //기존의 input 객체를 복사한 뒤
        [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    //첫화면
    useEffect(()=>{

        axios.get('/admin/enterprise')
        .then((res)=>{
            setDatas(res.data);
            console.log(res.data);

        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);

    //기업 추가 여부 설정
    const setAdd = () => {

        if(addBox)
        {
            if(stk_nm === ''){ setAddBox(false); return;}
            axios.post('/admin/enterprise/insert',{
                name:stk_nm,
                code:stock_stk_cd,
                count:ls,
                content:ent_smry,
                category:category,
                price:price
            })
            .then((res)=>{
                if(!res.data.isSuccess)
                {
                    alert('기업 추가에 실패했습니다.');
                }
                else{
                    datas.push({entNm:stk_nm,entSmry:ent_smry,slast:parseInt(price)});
                    setInputs({stk_nm:'',stock_stk_cd:'',ls:0,ent_smry:'',category:'',price:0,upnm:'',upSmry:''});
               
                }
                
            })
            .catch((err)=>{
                console.log(err);
            });
            setAddBox(false);
        }
        else
        {
            setAddBox(true);
        }

    }

    //기업 추가 여부 설정
    const setUP = (idx) => {

        if(UPBox !== -1)
        {
            
            setUPBox(-1);
        }
        else
        {
            setUPBox(idx);
            setInputs({
                ...inputs, //기존의 input 객체를 복사한 뒤
                upnm: datas[idx].entNm,
                upSmry: datas[idx].entSmry // name 키를 가진 값을 value 로 설정
                });
        }

    }

    //삭제 버튼
    const Del = (idx) => {

         axios.post('/admin/enterprise/delete',{
            code:datas[idx].stockStkCd,
        })
        .then((res)=>{
            if(!res.data.isSuccess){
                alert('삭제에 실패했습니다.');
            }
            else{
                setUPBox(-1);
                datas.splice(idx,1);
            }
        })
        .catch((err)=>{
            console.log(err);
        });

    }
    
    //수정 버튼
    const Update = (idx) => {
       
        axios.post('/admin/enterprise/update',{
            stockCode:datas[idx].stockStkCd,
            newEntNm:upnm,
            newEntSmr:upSmry
        })
        .then((res)=>{
            if(!res.data.isSuccess){
                alert('삭제에 실패했습니다.');
            }
            else{
                setUPBox(-1);
                datas[idx].entNm = upnm;
                datas[idx].entSmry = upSmry;
                setInputs({stk_nm:'',stock_stk_cd:'',ls:0,ent_smry:'',category:'',price:0,upnm:'',upSmry:''});
            }
        })
        .catch((err)=>{
            console.log(err);
        });

    }

    //기업 정보 출력 함수
    const printCom = () => {
        const result = [];
    
        for(let i=0; i < datas.length ; i++){
           result.push( 
                <Box>
                   <ComTitle onClick={()=>{setUP(i);}}>{datas[i].entNm}</ComTitle>
                </Box>
           )
        }

        return result;
    }

    return (
        <div>
        <StyledBtn classname="add" onClick={setAdd} style={{marginLeft:'2%'}} ><Title>{addBox ? '추가하기'  : '기업 추가'}</Title></StyledBtn>
      {addBox ? 
      <Box>
        <InputBox>
            <TitleLayout><Title>기업이름</Title></TitleLayout>
                <InputLayout>
                <StyledInput type="text" onChange={onChangeInput} name="stk_nm" value={stk_nm}></StyledInput>
                </InputLayout>
        </InputBox>
        <InputBox>
            <TitleLayout><Title>기업코드</Title></TitleLayout>
                <InputLayout>
                <StyledInput type="text" onChange={onChangeInput} name="stock_stk_cd" value={stock_stk_cd}></StyledInput>
                </InputLayout>
        </InputBox>
        <InputBox>
            <TitleLayout><Title>상장주식수</Title></TitleLayout>
                <InputLayout>
                <StyledInput type="text" onChange={onChangeInput} name="ls" value={ls}></StyledInput>
                </InputLayout>
        </InputBox>
        <InputBox>
            <TitleLayout><Title>기업설명</Title></TitleLayout>
                <InputLayout>
                <StyledInput type="text" onChange={onChangeInput} name="ent_smry" value={ent_smry}></StyledInput>
                </InputLayout>
        </InputBox>
        <InputBox>
            <TitleLayout><Title>카테고리</Title></TitleLayout>
                <InputLayout>
                <StyledSelect onChange={onChangeInput} name="category">
                    <option value="반도체" selected>건설업</option>
                    <option value="농업" >농업</option>
                    <option value="제조업" >제조업</option>
                    <option value="운송업" >운송업</option>
                    <option value="금융업" >금융업</option>
                    <option value="서비스업" >서비스업</option>
                </StyledSelect>
                </InputLayout>
        </InputBox>
        <InputBox>
            <TitleLayout><Title>가격</Title></TitleLayout>
                <InputLayout>
                <StyledInput type="text" onChange={onChangeInput} name="price" value={price}></StyledInput>
                </InputLayout>
        </InputBox>
      </Box> 
            :  (
                UPBox === -1 ? <ScrBox>{printCom()}</ScrBox> :
                <Box>
                <HeadCon>
                    <Info></Info>
                    <StyledBtn classname="update" onClick={() => { Update(UPBox); }} ><Title>수정</Title></StyledBtn>
                    <StyledBtn classname="delete" onClick={() => { Del(UPBox); }} ><Title>삭제</Title></StyledBtn>
                </HeadCon>
                <InputBox>
                <TitleLayout><Title>기업이름</Title></TitleLayout>
                    <InputLayout>
                    <StyledInput type="text" onChange={onChangeInput} name="upnm" value={upnm}></StyledInput>
                    </InputLayout>
                </InputBox>
                <InputBox>
                <TitleLayout><Title>기업정보</Title></TitleLayout>
                    <InputLayout>
                    <StyledInput type="text" onChange={onChangeInput} name="upSmry" value={upSmry}></StyledInput>
                    </InputLayout>
                </InputBox>
                <InputBox>
                <TitleLayout><Title>가격</Title></TitleLayout>
                    <InputLayout>
                    <StyledInput type="text" name="price" value={price} disabled></StyledInput>
                    </InputLayout>
                </InputBox>
            </Box>
                )
        }
     
      </div>
    );
}

export default AdminCom;

//기업명
const ComTitle = styled.div`
font-size:150%;
font-weight:bold;
text-align:center;
cursor: pointer;
`;

const StyledSelect =styled.select`
outline:none;
border: 0 solid black;
font-size:80%;
background-color:rgb(217,217,217);
margin:2%;
width:100%;
`;

const TitleLayout = styled.div`
width:13%;
margin-right:1%;
text-align:right;
`;

//인풋 간 간격
const InputBox =styled.div`
display:flex;
align-items:center;
`;

//회색 인풋 레이아웃
const InputLayout =styled.div`
width:89%;
margin-top:1%;
margin-bottom:1%;
height:50px;
border-radius: 30px;
background-color:rgb(217,217,217);
display:flex;
`;

//입력 레이아웃
const StyledInput =styled.input`
outline:none;
border: 0 solid black;
font-size:80%;
background-color:rgb(217,217,217);
margin:2%;
width:100%;
`;



//스크롤 페이지
const ScrBox = styled.div`
overflow:auto;
height:600px;
`;

//스타일 레이아웃
const Box = styled.div`
border-radius: 30px 30px 30px 30px;
box-shadow: ${(props) => props.theme.defaultShadow};
padding:2%;
margin:3%;
`;

//글자 속성
const Title = styled.div`
font-size:100%;
margin:1%;
`;

//버튼 레이아웃
const StyledBtn = styled.button`
height:80%;
cursor: pointer;
width:13%;
border:none;
border-radius:30px;
margin-right:1%;
${(props) => {
    if (props.className === 'update') {
      return `background-color:rgb(217,217,217);
      `;
    } else {
      return `background-color: black;
                color:white;
      `;
    }
  }};
`;

//정보 레이아웃
const Info = styled.div`
display:flex;
width:90%;
text-algin:center;
`;

//작성자, 제목 묶는
const HeadCon = styled.div`
display:flex;
`;