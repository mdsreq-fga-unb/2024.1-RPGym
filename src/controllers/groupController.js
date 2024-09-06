import groupService from "../services/groupService.js";

const createGroup = async (req, res) => {
  try {
    const group = await groupService.createGroup(req.body);
    return res.status(201).json(group);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao criar o grupo", error: error.message });
  }
};

const getGroupById = async (req, res) => {
  try {
    const group = await groupService.getGroupById(req.params.id);
    if (!group) {
      return res.status(404).json({
        message: "Não foi possível encontrar o grupo",
        error: error.message,
      });
    }
    return res.status(200).json(group);
  } catch (error) {
    return res.status(500).json({
      message: "Não foi possível encontrar o grupo",
      error: error.message,
    });
  }
};

const getAllGroups = async (req, res) => {
  try {
    const groups = await groupService.getAllGroups();
    return res.status(200).json(groups);
  } catch (error) {
    return res.status(500).json({
      message: "Não foi possível encontrar os grupos",
      error: error.message,
    });
  }
};

const updateGroup = async (req, res) => {
  try {
    const group = await groupService.updateGroup(req.params.id, req.body);
    if (!group) {
      return res.status(404).json({ message: "Esse grupo não existe" });
    }
    return res.status(200).json(group);
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao atualizar o grupo, por favor tente novamente",
      error: error.message,
    });
  }
};

const deleteGroup = async (req, res) => {
  try {
    const group = await groupService.deleteGroup(req.params.id);
    if (!group) {
      return res.status(404).json({ message: "Esse grupo não existe" });
    }
    return res.status(200).json({ message: "Grupo deletado com sucesso" });
  } catch (error) {
    return res.status(500).json({
      message: "Não foi possível deletar o grupo, por favor tente novamente",
      error: error.message,
    });
  }
};
const removeUser = async (req, res) => {
  try {
    const { groupId, userId } = req.params;
    const updatedGroup = await groupService.removeUser(groupId, userId);
    return res.status(200).json(updatedGroup);
  } catch (error) {
    return res.status(500).json({
      message: "Não foi possível remover o usuário, por favor tente novamente",
      error: error.message,
    });
  }
};
export default {
  createGroup,
  getGroupById,
  getAllGroups,
  updateGroup,
  deleteGroup,
  removeUser,
};
