import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req);
    res.json({message: 'Hello First API Call!'});
});

// router.get('/', (req, res, next) => {
//     console.log('index')
//     console.log(req.headers);
//     console.log(next);
//     res.json({message: 'Hello index'});
//  });

module.exports = router;
