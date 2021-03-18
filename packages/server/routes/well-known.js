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

router.post('/yI_4XzwKu8-i3tHIGFZeKhs2b2x6oNY_wrJjzz2rg2M', (req, res) => {
    res.send(
        'yI_4XzwKu8-i3tHIGFZeKhs2b2x6oNY_wrJjzz2rg2M.UxFZdzxD9shJvmpnBujNWBaWysV2OVBqpW5C6zqxpgU',
    );
});

router.get('/yI_4XzwKu8-i3tHIGFZeKhs2b2x6oNY_wrJjzz2rg2M', (req, res) => {
    res.send(
        'yI_4XzwKu8-i3tHIGFZeKhs2b2x6oNY_wrJjzz2rg2M.UxFZdzxD9shJvmpnBujNWBaWysV2OVBqpW5C6zqxpgU',
    );
});

router.post('/9efee9QxW0pQ8hAGlQ6voJeJDhB_TVOnhg5vjyhCamk', (req, res) => {
    res.send(
        '9efee9QxW0pQ8hAGlQ6voJeJDhB_TVOnhg5vjyhCamk.UxFZdzxD9shJvmpnBujNWBaWysV2OVBqpW5C6zqxpgU',
    );
});

router.get('/9efee9QxW0pQ8hAGlQ6voJeJDhB_TVOnhg5vjyhCamk', (req, res) => {
    res.send(
        '9efee9QxW0pQ8hAGlQ6voJeJDhB_TVOnhg5vjyhCamk.UxFZdzxD9shJvmpnBujNWBaWysV2OVBqpW5C6zqxpgU',
    );
});

router.post('/qEZq935WwEinU41QM5VOvCEbDkJjEoRXiRt9WBp5F_4', (req, res) => {
    res.send(
        'qEZq935WwEinU41QM5VOvCEbDkJjEoRXiRt9WBp5F_4.UxFZdzxD9shJvmpnBujNWBaWysV2OVBqpW5C6zqxpgU',
    );
});

router.get('/qEZq935WwEinU41QM5VOvCEbDkJjEoRXiRt9WBp5F_4', (req, res) => {
    res.send(
        'qEZq935WwEinU41QM5VOvCEbDkJjEoRXiRt9WBp5F_4.UxFZdzxD9shJvmpnBujNWBaWysV2OVBqpW5C6zqxpgU',
    );
});

module.exports = router;
