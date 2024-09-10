const baseUrl = "https://rpgym-backend-862d64fb9e62.herokuapp.com/";

const getGroups = async () => {
  const userId = localStorage.getItem("userId");
  try {
    const response = await fetch(`${baseUrl}users/${userId}`);
    if (!response) {
      throw new Error("Failed to fetch user");
    }
    const data = await response.json();
    // console.log(data);

    return { data };
  } catch (error) {
    console.error("Error fetching user:", error);
    return { data: null };
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getGroups };
