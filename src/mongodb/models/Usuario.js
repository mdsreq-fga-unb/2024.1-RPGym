import { ObjectId } from 'mongodb'; // Usar import ao invés de require

const usuarioSchema = {
    nome: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    personagemId: {
        type: ObjectId,
        ref: 'Personagem'
    }
};

export { usuarioSchema };
