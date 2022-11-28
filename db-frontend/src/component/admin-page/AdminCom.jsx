import { useState } from "react";
import styled from "styled-components";

function AdminCom () {

    const [addBox,setAddBox]=useState(false);
    const [inputs, setInputs] = useState({stk_nm:'초반이름',stock_stk_cd:'',ls:0,ent_smry:'초반 설명',category:'',s_open:0,s_high:0,s_low:0,up_nm:'수정이름',up_smry:'수정정보'});
    const {stk_nm,stock_stk_cd,ls,ent_smry,category,s_open,s_high,s_low,up_nm,up_smry} = inputs; // 비구조화 할당을 통해 값 추출

  const onChangeLoginInput= (e) => {
    const {name, value} =e.target; //우선 e.target에서 id와 value 추출
    setInputs({
      ...inputs, //기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

    //삭제 버튼
    const Del = (idx) => {
        alert(idx+'delete');
    }
    
    //수정 버튼
    const Update = (idx) => {
        alert(idx+'update');
    }

    //기업 추가 여부 설정
    const setAdd = () => {

        if(addBox)
        {setAddBox(false);}
        else
        {setAddBox(true);}

    }

    //기업 정보 출력 함수
    const printCom = () => {
        const result = [];
    
        for(let i=0; i < 10 ; i++){
           result.push( 
           <Box>
                <HeadCon>
                    <Info></Info>
                    <StyledBtn classname="update" onClick={() => { Update(i); }} ><Title>수정</Title></StyledBtn>
                    <StyledBtn classname="delete" onClick={() => { Del(i); }} ><Title>삭제</Title></StyledBtn>
                </HeadCon>
                <InputBox>
                <TitleLayout><Title>기업이름</Title></TitleLayout>
                    <InputLayout>
                    <StyledInput type="text" onChange={onChangeLoginInput} name="up_nm" value={up_nm}></StyledInput>
                    </InputLayout>
                </InputBox>
                <InputBox>
                <TitleLayout><Title>기업정보</Title></TitleLayout>
                    <InputLayout>
                    <StyledInput type="text" onChange={onChangeLoginInput} name="up_smry" value={up_smry}></StyledInput>
                    </InputLayout>
                </InputBox>
                <InputBox>
                <TitleLayout><Title>가격</Title></TitleLayout>
                    <InputLayout>
                    <StyledInput type="text" name="stk_nm" value={stk_nm} disabled></StyledInput>
                    </InputLayout>
                </InputBox>
                <InputBox>
                 <TitleLayout><Title>관심수</Title></TitleLayout>
                    <InputLayout>
                    <StyledInput type="text"  name="stk_nm" value={stk_nm} disabled></StyledInput>
                    </InputLayout>
                </InputBox>
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
                <StyledInput type="text" onChange={onChangeLoginInput} name="stk_nm" value={stk_nm}></StyledInput>
                </InputLayout>
        </InputBox>
        <InputBox>
            <TitleLayout><Title>기업코드</Title></TitleLayout>
                <InputLayout>
                <StyledInput type="text" onChange={onChangeLoginInput} name="stock_stk_cd" value={stock_stk_cd}></StyledInput>
                </InputLayout>
        </InputBox>
        <InputBox>
            <TitleLayout><Title>상장주식수</Title></TitleLayout>
                <InputLayout>
                <StyledInput type="text" onChange={onChangeLoginInput} name="ls" value={ls}></StyledInput>
                </InputLayout>
        </InputBox>
        <InputBox>
            <TitleLayout><Title>기업설명</Title></TitleLayout>
                <InputLayout>
                <StyledInput type="text" onChange={onChangeLoginInput} name="ent_smry" value={ent_smry}></StyledInput>
                </InputLayout>
        </InputBox>
        <InputBox>
            <TitleLayout><Title>카테고리</Title></TitleLayout>
                <InputLayout>
                <StyledSelect onChange={onChangeLoginInput} name="category">
                    <option value="반도체" selected>반도체</option>
                    <option value="종목2" >종목2</option>
                    <option value="종목3" >종목3</option>
                    <option value="종목4" >종목4</option>
                </StyledSelect>
                </InputLayout>
        </InputBox>
        <InputBox>
            <TitleLayout><Title>시가</Title></TitleLayout>
                <InputLayout>
                <StyledInput type="text" onChange={onChangeLoginInput} name="s_open" value={s_open}></StyledInput>
                </InputLayout>
        </InputBox>
        <InputBox>
            <TitleLayout><Title>고가</Title></TitleLayout>
                <InputLayout>
                <StyledInput type="text" onChange={onChangeLoginInput} name="s_high" value={s_high}></StyledInput>
                </InputLayout>
        </InputBox>
        <InputBox>
            <TitleLayout><Title>저가</Title></TitleLayout>
                <InputLayout>
                <StyledInput type="text" onChange={onChangeLoginInput} name="s_low" value={s_low}></StyledInput>
                </InputLayout>
        </InputBox>
      </Box> 
            :  <ScrBox>{printCom()}</ScrBox>}
     
      </div>
    );
}

export default AdminCom;

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

//작성자, 제목 묶는
const HeadCon = styled.div`
display:flex;
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