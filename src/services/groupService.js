const baseUrl = "https://rpgym-backend-862d64fb9e62.herokuapp.com/";

const getGroups = async () => {
  const userId = localStorage.getItem("userId");
  console.log(userId);
  try {
    const response = await fetch(`${baseUrl}group/user/${userId}/groups`);
    // console.log(response);
    if (!response.ok) {
      throw new Error("Failed to fetch groups");
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error("Error fetching groups:", error);
    return { data: null };
  }
};

const createGroup = async (groupData) => {
  try {
    const response = await fetch(`${baseUrl}group`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(groupData),
    });
    if (!response.ok) {
      throw new Error("Failed to create group");
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error("Error creating group:", error);
    return { data: null };
  }
};

const getGroupById = async (groupId) => {
  try {
    const response = await fetch(`${baseUrl}group/${groupId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch group");
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error("Error fetching group:", error);
    return { data: null };
  }
};

const updateGroup = async (groupId, groupData) => {
  try {
    const response = await fetch(`${baseUrl}group/${groupId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(groupData),
    });
    if (!response.ok) {
      throw new Error("Failed to update group");
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error("Error updating group:", error);
    return { data: null };
  }
};

const deleteGroup = async (groupId) => {
  try {
    const response = await fetch(`${baseUrl}group/${groupId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete group");
    }
    return { success: true };
  } catch (error) {
    console.error("Error deleting group:", error);
    return { success: false };
  }
};

const joinGroupByCode = async (joinCode) => {
  const userId = localStorage.getItem("userId");
  console.log(userId);
  console.log(joinCode);
  try {
    const response = await fetch(`${baseUrl}group/${userId}/join/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ joinCode }),
    });

    if (!response.ok) {
      throw new Error("Failed to join group");
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error("Error joining group:", error);
    return { data: null };
  }
};

const removeUserFromGroup = async (groupId, userId) => {
  try {
    const response = await fetch(`${baseUrl}group/${groupId}/users/${userId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to remove user from group");
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error("Error removing user from group:", error);
    return { data: null };
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getGroups,
  createGroup,
  getGroupById,
  updateGroup,
  deleteGroup,
  joinGroupByCode,
  removeUserFromGroup,
};
