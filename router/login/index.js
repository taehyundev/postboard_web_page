var express = require('express')
var router = express.Router()
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

// DATABASE SETTING
var mysql_odbc = require('../../models/db_conn')();
var connection = mysql_odbc.init();

router.get('/', function(req,res) {
	var msg;
	var errMsg = req.flash('error')
	if(errMsg) msg = errMsg;
	res.render('login.ejs', {'message' : msg});
})

//passport.serialize
passport.serializeUser(function(user, done) {
	console.log('passport session save : ', user.id)
  done(null, user.id)
});

passport.deserializeUser(function(id, done) {
	console.log('passport session get id: ', id)
	done(null, id);
})

passport.use('local-login', new LocalStrategy({
	usernameField: 'username',
  passwordField: 'password',
  passReqToCallback : true
}, function(req, id, password, done) {
	var query = connection.query(`select * from info where ID='${id}' && PW = '${password}'`, function(err,rows) {
		if(err) return done(err);

		if(rows.length) {
			return done(null, {'username' : id, 'password':password,'id' : rows[0].insertId})
		} else {
				return done(null, false, {'message' : 'Incorrect id or password'})
		}
	})
}
));

router.post('/', function(req, res, next) {
	passport.authenticate('local-login', function(err, user, info) {
		if(err) res.status(500).json(err);
		if (!user) return res.status(401).json(info.message);

		req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.json(user);
    });

	})(req, res, next);
})


module.exports = router;