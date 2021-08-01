import "./App.css";
import Profile from "./Component/Profile";
import UserList from "./Component/UserList";
import UserState from "./Context/User/UserState";

function App() {
  return (
    <UserState>
      <UserList />
      <Profile />
    </UserState>
  );
}

export default App;
