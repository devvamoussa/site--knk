const express = require('express');
const router = express.Router();
const {getApi, setApi, UpdateApi,  deleteApi} = require('../controllers/apiController')

const { protect } = require('../middleware/authMiddleware')


router.route('/').get(protect, getApi).post(protect, setApi)
router.route('/:id').put(protect, UpdateApi).delete(protect, deleteApi)


module.exports = router