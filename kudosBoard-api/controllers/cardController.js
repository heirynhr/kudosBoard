
const prisma = require("../db");


//GET - THE all the cards within the database which looks like looks like - > /boards
exports.getAll = async (req, res) => {
    const cardList = await prisma.card.findMany();
    res.json(cardList);
};

// POST create a NEW card 
exports.create = async (req, res) => {
    const { title, cardImg, description, author, likes, boardId } = req.body;
    const newCard = await prisma.card.create({
        data: { title, cardImg, description, author, likes, boardId},
    });
    res.status(201).json(newCard);
};


//DELETE a specific CARD
exports.remove = async (req, res) => {
    const cardId = Number(req.params.cardId);
    await prisma.card.delete({ 
        where: { cardId } 
    });
    res.status(204).end();
};