const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newscontroller');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

router.get('/', newsController.getAllNews);
router.get('/my-news', auth, newsController.getMyNews);
router.get('/:slug', newsController.getNewsDetails);

router.post('/', auth, upload.single('image'), newsController.addNews);
router.put('/:id', auth, upload.single('image'), newsController.updateNews);
router.delete('/:id', auth, newsController.deleteNews);

module.exports = router;
