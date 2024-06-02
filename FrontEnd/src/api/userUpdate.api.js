const userUpdateApi = async (profileAttributes, token) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          "accept" : "application/json",
          "Content-Type": "application/json",
          "Authorization":  `Bearer ${token}`,
        },
        body: JSON.stringify(profileAttributes),
      });
      const datas = await response.json();
      return datas;
    } catch (error) {
      console.error("Error: Unauthorized");
    }
  };
  
  export { userUpdateApi };