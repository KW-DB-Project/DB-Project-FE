import Login from './LoginPage';
import {useRecoilValue} from "recoil";
import { isLoginedAtom } from '../atom/loginAtom';
import styled from 'styled-components';

const Dummy = styled.div`
  display: flex;
  padding-top: 500px;
  justify-content: center;
`;

function UserMyPage(){
  const login = useRecoilValue(isLoginedAtom);

  return(
  <div className='UserMyPage'>
    {login.isLogined? <Dummy>{`이름 : ${login.userName} / 아이디 : ${login.id} / 비밀번호 : ${login.password} / 나이 : ${login.age} / 잔고 : ${login.balance}`}</Dummy> : <Login/>}
  </div>
  );
}

export default UserMyPage;
