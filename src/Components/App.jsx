import { useEffect, useState } from "react";
import UI from "./UI";
import axios from "axios";
function App() {
  const [userData,setUserData]=useState([])
  const [loading, setLoading] = useState(false); // Add loading state
  const fetchUser=async()=>{
    setLoading(true);
    try {
      const res=await axios.get(`https://randomuser.me/api/`)
      setUserData(res.data.results);
    } catch (err){
      console.log(err)
    }
    setLoading(false);
  }
  
  useEffect(()=>{
    fetchUser();
  },[])
  useEffect(() => {
    if (userData.length > 0) {
      console.log(userData[0]);
    }
  }, [userData]);
  const handleClick =()=>{
    fetchUser();
  }
  return (
    <UI userData={userData} loading={loading} handleClick={handleClick}/>
  );
}

export default App;
