import { create } from "../services/userService.js";


const createControler = async (req, res) => {
    const { name, age, height, weight, email, password } = req.body;
  
    if (!name || !age || !height || !weight || !email || !password) {
      return res.status(400).send({ message: 'Todos os campos não foram preenchidos.' });
    }
  
    try {
      const user = await create(req.body);
  
      if (!user) {
        return res.status(400).send({ message: 'Erro ao criar usuario.' });
      }
  
      res.status(201).send({
        message: 'Usuario criado com sucesso',
        user: {
            name,
            age,
            height,
            weight,
            email,
            password,
        },
      });
    } catch (error) {
      res.status(500).send({ message: 'Erro no servidor ao criar usuário.' });
    }
  };
  
  export { createControler };