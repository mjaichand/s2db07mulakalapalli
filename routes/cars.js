var express = require('express');
const car_controller = require('../controllers/car');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('cars', { title: 'Search Results' });
});
*/
const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}
/* GET costumes */
router.get('/', car_controller.car_view_all_Page);
/* GET detail car page */
router.get('/detail', car_controller.car_view_one_Page);
/* GET create car page */
router.get('/create',secured, car_controller.car_create_Page);
/* GET create update page */
router.get('/update',secured, car_controller.car_update_Page);
/* GET delete car page */
router.get('/delete',secured, car_controller.car_delete_Page);

module.exports = router;
