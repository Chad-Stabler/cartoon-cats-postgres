const { Router } = require('express');
const Cat = require('../models/Cat');

const router = Router();

router
  .get('/:id', async (req, res) => {
    const cat = await Cat.getById(req.params.id);

    res.json(cat);
  })
  .get('/', async (req, res) => {
    const cats = await Cat.getAll();
    const toResp = cats.map(cat => ({ 'id': cat.id, 'name': cat.name }));
    res.json(toResp);
  });


module.exports = router;
