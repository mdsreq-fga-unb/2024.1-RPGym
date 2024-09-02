export const create = (req, res) => {
    const {name, age, height,weight, email, password} = req.body;

    if(!name || !age || !height || !weight || !email || !password){
        res.status(400).send({message: "Todos os campos não foram preenchidos."})
    }
    res.json("ok");
};
