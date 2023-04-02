import * as tuitsDao from './tuits-dao.js'

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "../images/nasa.png",
    "title": "NASA's New Post",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "disliked": false,
    "dislikes": 0,
}

const createTuit = async (req, res) => {
    const newTuit = {
        ...req.body,
        ...templateTuit};
    const insertedTuit = await tuitsDao
                             .createTuit(newTuit);
    res.json(insertedTuit);
}
const findTuits  = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}
const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao
                       .updateTuit(tuitdIdToUpdate,
                                   updates);
    res.json(status);
}
const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao
                       .deleteTuit(tuitdIdToDelete);
    res.json(status);
}

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
