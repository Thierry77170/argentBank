const loginApi = async (credentials) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        "accept" : "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const datas = await response.json();
    return datas;
  } catch (error) {
    console.error("invalid Fields");
  }
};

export default loginApi;