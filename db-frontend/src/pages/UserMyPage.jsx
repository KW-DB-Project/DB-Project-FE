import Login from './LoginPage';
import {useRecoilValue} from "recoil";
import { isLoginedAtom } from '../atom/loginAtom';
import MyPage from '../pages/MyPage';
import AdminPage from './AdminPage';


function UserMyPage(){
  const login = useRecoilValue(isLoginedAtom);

  return(
  <div className='UserMyPage'>
  { login.isLogined ? 
   (login.id === 'admin' ?<AdminPage/> : <MyPage />)
   :
    <Login />
    }
  </div>
  );
}

export default UserMyPage;