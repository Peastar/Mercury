import express from 'express';
const router = express.Router();

router.post('/', async (req, res) => {
    console.log(req);
    console.log(req.body);
    res.json({message: 'Hello First API Call!'});
});

// router.get('/', (req, res, next) => {
//     console.log('index')
//     console.log(req.headers);
//     console.log(next);
//     res.json({message: 'Hello index'});
//  });

module.exports = router;
