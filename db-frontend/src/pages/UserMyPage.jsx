import Login from './LoginPage';
import {useRecoilValue} from "recoil";
import { isLoginedAtom } from '../atom/loginAtom';
import MyPage from '../pages/MyPage';



function UserMyPage(){
  const login = useRecoilValue(isLoginedAtom);

  return(
  <div className='UserMyPage'>
  { login.isLogined ?
   <MyPage />:
    <Login />
    }
  </div>
  );
}

export default UserMyPage;