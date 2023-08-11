import { useHistory } from 'react-router-dom';
import { logout } from '../utils/auth';

function UserProfile() {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push('/loginPage');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div>
      <h2>My Profile</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserProfile;
