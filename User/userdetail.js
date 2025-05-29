import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await getUserProfile();
        if (data) {
          setUser(data);
        } else {
          setError('Failed to fetch user profile');
        }
      } catch (error) {
        setError('An error occurred while fetching user profile');
      }
    };

    fetchUserProfile();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{usermkkkk.name}</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <p>Mobile: {user.mobileno}</p>
    </div>
  );
};

export default UserProfile;
