import { ObjectId } from 'mongodb'; // Usar import ao invés de require

const usuarioSchema = {
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    altura: {
        type: String,
        required: true
    },
    peso: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    personagemId: {
        type: ObjectId,
        ref: 'Personagem'
    }
};

export { usuarioSchema };