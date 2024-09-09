import { ObjectId } from "mongodb";

const desafioSchema = {
  dataInicio: {
    type: Date,
    required: true,
  },
  dataFim: {
    type: Date,
    required: true,
  },
  recompensa: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  participantes: [
    {
      type: ObjectId,
      ref: "Usuario",
    },
  ],
};

export { desafioSchema };
