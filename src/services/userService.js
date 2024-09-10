const baseUrl = "https://rpgym-backend-862d64fb9e62.herokuapp.com/";
const getIMC = async (userId) => {
  try {
    const response = await fetch(`${baseUrl}activities/${userId}/imc`);
    if (!response.ok) {
      throw new Error("Failed to fetch IMC");
    }
    const data = await response.json();
    return data.imc;
  } catch (error) {
    console.error("Error fetching IMC:", error);
    return null;
  }
};
const getUserMetrics = async (userId) => {
  try {
    const response = await fetch(`${baseUrl}users/${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user metrics");
    }
    const data = await response.json();
    return {
      peso: data.weight,
      altura: data.height,
    };
  } catch (error) {
    console.error("Error fetching user metrics:", error);
    return { peso: null, altura: null };
  }
};
const getUser = async (userId) => {
  try {
    const response = await fetch(`${baseUrl}users/${userId}`);
    if (!response) {
      throw new Error("Failed to fetch user");
    }
    const data = await response.json();
    // console.log(data);

    return { name: data.name, id: data.id, personagem: data.personagem };
  } catch (error) {
    console.error("Error fetching user:", error);
    return { data: null };
  }
};
const getUserByEmail = async (email) => {
  try {
    const response = await fetch(`${baseUrl}users/email/${email}`);
    if (!response) {
      throw new Error("Failed to fetch user");
    }
    const data = await response.json();
    // console.log(data);

    return { id: data.id };
  } catch (error) {
    console.error("Error fetching user:", error);
    return { data: null };
  }
};
const login = async (email, password) => {
  try {
    const response = await fetch(`${baseUrl}login/`, {
      method: "POST", // Mudando o método para POST
      headers: {
        "Content-Type": "application/json", // Indicando que o corpo da requisição é JSON
      },
      body: JSON.stringify({
        email, // Passando email e password no corpo
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to log in");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return { data: null };
  }
};
const createUser = async (userData) => {
  try {
    const response = await fetch(`${baseUrl}users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Erro ao criar usuário.");
    }

    return data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error; // Repassa o erro para ser tratado onde a função é chamada
  }
};
const updateUser = async (userId, userData) => {
  console.log("userData");
  console.log(userData);
  try {
    const response = await fetch(`${baseUrl}users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Erro ao atualizar usuário.");
    }
    console.log("dados atualizados:", data);
    return data;
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    throw error;
  }
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getIMC,
  getUser,
  getUserMetrics,
  login,
  createUser,
  updateUser,
  getUserByEmail,
};
