import { useState, useEffect } from 'react';

const useFetchUsers = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);
  console.log(users)
 if(users.length>0){
 console.log(users[0].address.city)
 }
  return { users, loading };
};

export default useFetchUsers;
