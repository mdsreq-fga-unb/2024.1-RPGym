import Group from "../mongodb/models/Grupo.js";

const createGroup = async (groupData) => {
  const group = new Group(groupData);
  return await group.save();
};

const getGroupById = async (groupId) => {
  return await Group.findById(groupId).populate("users creator");
};

const getAllGroups = async () => {
  return await Group.find().populate("users creator");
};

const updateGroup = async (groupId, updateData) => {
  return await Group.findByIdAndUpdate(groupId, updateData, { new: true });
};

const deleteGroup = async (groupId) => {
  return await Group.findByIdAndDelete(groupId);
};
const removeUser = async (groupId, userId) => {
  const group = await Group.findById(groupId);
  if (!group) {
    throw new Error("Group not found");
  }

  group.users = group.users.filter((user) => user.toString() !== userId);
  return await group.save();
};

export default {
  removeUser,
  createGroup,
  getGroupById,
  getAllGroups,
  updateGroup,
  deleteGroup,
};
