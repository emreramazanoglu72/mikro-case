const Api = async (limit) => {
  const response = await fetch(
    `https://dummyapi.io/data/v1/user?limit=${limit}`,
    {
      headers: {
        "app-id": "6112dc7c3f812e0d9b6679dd",
      },
    }
  );
  return response.json();
};

export default Api;
