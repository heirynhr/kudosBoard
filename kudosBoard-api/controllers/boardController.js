
const prisma = require("../db");


//GET - THE all the board looks like - > /boards
exports.getAll = async (req, res) => {
    const {category, sort} = req.query
    const filters = {}
    if (category) {
        filters.category = {
            equals: category,
            mode: "insensitive",
        }
    } 
    let orderFilter;
    if (sort=="recent") {
        orderFilter = {
            createdAt: 'desc'
        }
    }
    const boardList = await prisma.board.findMany({
        where: filters,
        orderBy: orderFilter,
        include: {
            cards: true,
        }
    });
    res.json(boardList);
};

//GET by board ID
exports.getById = async (req, res) => {
        //get id as number from the params
    const boardId = Number(req.params.boardId); 
    const board = await prisma.board.findUnique({ 
        where: { boardId }, 
        include: {
            cards: true,
        }
    });
    if (!board) return res.status(404).json({ error: "Board not found!" });
    res.json(board);
};

// POST create a NEW board 
exports.create = async (req, res) => {
    const { title, coverImg, description, author, category, cards} = req.body;
    const newBoard = await prisma.board.create({
        data: { title, coverImg, description, author, category},
        include: {
            cards: true,
        }
    });
    res.status(201).json(newBoard);
};

//DELETE a specific BOARD
exports.remove = async (req, res) => {
    const boardId = Number(req.params.boardId);
    await prisma.board.delete({ 
        where: { boardId } 
    });
    res.status(204).end();
};


// custom endpoints 
// update board with a new