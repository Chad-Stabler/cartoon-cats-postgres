const { Router } = require('express');

const { cats } = require('../../data/cats');

const router = Router();

router
.get('/:id', (req, res) => {
    const cat = cats.find((cat) => cat.id === req.params.id);

    res.json(cat);
})
.get('/', (req, res) => {
    const resp = cats.map(cat => {
        return {id: cat.id, name: cat.name}
    });
    res.json(resp);
});


module.exports = router;
