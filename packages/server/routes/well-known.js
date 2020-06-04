import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req);
    res.json({message: 'SSL'});
});

router.get('/', (req, res, next) => {
    console.log(req);
    console.log(next);
    res.json({message: 'Hello SSL'});
});

router.post('/BgZlLm4SqO8tOGMuhPEH7Wt_F8clAPy0RM2l52UBspA', (req, res) => {
    res.send(
        'BgZlLm4SqO8tOGMuhPEH7Wt_F8clAPy0RM2l52UBspA.HOPHrIP2R-3MgyeqJChot4lW3X1a-xwtvd2gGo6X6OY',
    );
});

router.get('/BgZlLm4SqO8tOGMuhPEH7Wt_F8clAPy0RM2l52UBspA', (req, res) => {
    res.send(
        'BgZlLm4SqO8tOGMuhPEH7Wt_F8clAPy0RM2l52UBspA.HOPHrIP2R-3MgyeqJChot4lW3X1a-xwtvd2gGo6X6OY',
    );
});

router.post('/cXDfiSw-exQ6oJmykBPhRoVOHzU3YOjRctQNTGJnNgs', (req, res) => {
    res.send(
        'cXDfiSw-exQ6oJmykBPhRoVOHzU3YOjRctQNTGJnNgs.HOPHrIP2R-3MgyeqJChot4lW3X1a-xwtvd2gGo6X6OY',
    );
});

router.get('/cXDfiSw-exQ6oJmykBPhRoVOHzU3YOjRctQNTGJnNgs', (req, res) => {
    res.send(
        'cXDfiSw-exQ6oJmykBPhRoVOHzU3YOjRctQNTGJnNgs.HOPHrIP2R-3MgyeqJChot4lW3X1a-xwtvd2gGo6X6OY',
    );
});

router.post('/oyOjotmcPXYtj0bwg8A-ad8UJpJA8TLakt4Nt028BkM', (req, res) => {
    res.send(
        'oyOjotmcPXYtj0bwg8A-ad8UJpJA8TLakt4Nt028BkM.HOPHrIP2R-3MgyeqJChot4lW3X1a-xwtvd2gGo6X6OY',
    );
});

router.get('/oyOjotmcPXYtj0bwg8A-ad8UJpJA8TLakt4Nt028BkM', (req, res) => {
    res.send(
        'oyOjotmcPXYtj0bwg8A-ad8UJpJA8TLakt4Nt028BkM.HOPHrIP2R-3MgyeqJChot4lW3X1a-xwtvd2gGo6X6OY',
    );
});

module.exports = router;
