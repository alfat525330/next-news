const News = require('../models/News');
const User = require('../models/User');
const slugify = require('slugify');

/* i. All news list */
exports.getAllNews = async (req, res) => {
  try {
    const news = await News.findAll({
      where: { is_deleted: false },
      include: [{ model: User, attributes: ['id', 'name'] }],
      order: [['createdAt', 'DESC']],
    });

    res.json({ status: true, message: 'All news data', details: news });
  } catch (err) {
    res.status(500).json({message: err.message , status: false, details: []});
  }
};

/* ii. Add news */
exports.addNews = async (req, res) => {
  try {
    const { title, content, date } = req.body;

    const news = await News.create({
      user_id: req.user.id,
      title,
      slug: slugify(title, { lower: true }),
      content,
      date,
      image: req.file ? req.file.filename : null,
    });

    res.json({ status: true, message: 'News created', details: news });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message ,details : []});
  }
};

/* iii. News details */
exports.getNewsDetails = async (req, res) => {
  try {
    const news = await News.findOne({
      where: { slug: req.params.slug, is_deleted: false },
      include: [{ model: User, attributes: ['id', 'name'] }],
    });

    if (!news) {
      return res.status(404).json({ status: false, message: 'News not found',details : [] });
    }

    res.json({ status: true, message:"News Details", details: news });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message ,details : [] });
  }
};

/* iv. Update news */
exports.updateNews = async (req, res) => {
  try {
    const news = await News.findByPk(req.params.id);

    if (!news || news.is_deleted) {
      return res.status(404).json({ status: false, message: 'News not found',details : [] });
    }

    if (news.user_id !== req.user.id) {
      return res.status(403).json({ status: false, message: 'Unauthorized',details : [] });
    }

    await news.update({
      title: req.body.title,
      slug: slugify(req.body.title, { lower: true }),
      content: req.body.content,
      date: req.body.date,
      image: req.file ? req.file.filename : news.image,
    });

    res.json({ status: true, message: 'News updated' ,details : news});
  } catch (err) {
    res.status(500).json({ status: false, message: err.message ,details : []});
  }
};

/* v. Soft delete */
exports.deleteNews = async (req, res) => {
  try {
    const news = await News.findByPk(req.params.id);

    if (!news) {
      return res.status(404).json({ status: false, message: 'News not found' ,details : []});
    }

    await news.update({ is_deleted: true });

    res.json({ status: true, message: 'News deleted' ,details : []});
  } catch (err) {
    res.status(500).json({ status: false, message: err.message ,details : []});
  }
};

/* vi. Logged-in user news */
exports.getMyNews = async (req, res) => {
  try {
    const news = await News.findAll({
      where: {
        user_id: req.user.id,
        is_deleted: false,
      },
      order: [['createdAt', 'DESC']],
    });

    res.json({ status: true, message:"News List", details: news });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message ,details : []});
  }
};
