const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    const responseJson = {
        message: 'Welcome warriors to Golden Owl!_V3:testGHA',
    }
    res.json(responseJson)
})

module.exports = router
