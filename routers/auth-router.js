const { Router } = require('express');
const router = Router()
const User = require('../models/User')

router.post('/reg', async (req, res) => {
    try {
        const { email, password } = body.req;

        const isUsed = await User.findOne({ email });

        if (isUsed) {
            return res.status(300).json({message: 'This email is already taken, try another one'});
        }

        const user = new User({
            email, password
        })

        await user.save();

        return res.status(201).json({message: 'New account is created'});

    } catch (error) {
        console.log(error);
    }
});

module.exports = router