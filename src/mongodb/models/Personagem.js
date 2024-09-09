import { ObjectId } from "mongodb";

const personagemSchema = {
  usuarioId: {
    type: ObjectId,
    ref: "Usuario",
    required: true,
  },
  moedas: {
    type: Number,
    default: 0,
  },
};

export { personagemSchema };
