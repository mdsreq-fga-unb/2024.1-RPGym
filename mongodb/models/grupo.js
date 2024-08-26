import { ObjectId } from 'mongodb';

const grupoSchema = {
    nome: { type: String, required: true },
    integrantes: [{ type: ObjectId, ref: 'Personagem' }]
};

export { grupoSchema };
