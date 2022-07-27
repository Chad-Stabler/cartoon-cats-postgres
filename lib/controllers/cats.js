const { Router } = require('express');
const Cat = require('../models/Cat');

const { cats } = require('../../data/cats');

const router = Router();

router
  .get('/:id', (req, res) => {
    const cat = cats.find((cat) => cat.id === req.params.id);

    res.json(cat);
  })
  .get('/', async (req, res) => {
    const ccats = await Cat.getAll();
    const toResp = ccats.map(cat => ({ 'id': cat.id, 'name': cat.name }));
    res.json(toResp);
  });


module.exports = router;
