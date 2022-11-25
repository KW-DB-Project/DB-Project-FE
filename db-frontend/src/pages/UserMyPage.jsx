import Login from './LoginPage';
import {useRecoilValue} from "recoil";
import { isLoginedAtom } from '../atom/loginAtom';
import MyPage from '../pages/MyPage';


/*

{ login.isLogined ?
   <MyPage />:
    <Login />
    }

*/

function UserMyPage(){
  const login = useRecoilValue(isLoginedAtom);

  return(
  <div className='UserMyPage'>
   <MyPage />
  </div>
  );
}

export default UserMyPage;