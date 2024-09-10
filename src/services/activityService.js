const baseUrl = "https://rpgym-backend-862d64fb9e62.herokuapp.com/";

const registerActivity = async (requestBody) => {
  try {
    console.log(JSON.stringify(requestBody));
    const userId = localStorage.getItem("userId");
    const response = await fetch(`${baseUrl}activities/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(requestBody),
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to create activity");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error creating activity:", error);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { registerActivity };
