const express = require('express');
const router = express.Router();

router.get('/' , (req , res) => {
    res.json(Users);
});

router.get('/:id' , (req , res) =>{
res.send(`User with id ${req.params.id}`);
});

module.exports = router;