export const userApi  = async (token) => { 
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'post',
        headers: {
          "accept": "application/json",
          "Authorization":  `Bearer ${token}`,
        },
      });
      const data = await response.json();
      
    return data;
    } catch (error) {
      console.error("error while retrieving data");
    }
  };


  
