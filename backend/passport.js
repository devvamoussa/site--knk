const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const GOOGLE_CLIENT_ID = "551428514164-adgvr08qbnoic2i2udt9bjj2j37tuaqc.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const FACEBOOK_APP_ID = "3332015433738521";
const FACEBOOK_APP_SECRET = "39a70dffced6a04148179b67426fcd61";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)

   //const user= {
    //username: profile.displayName,
    //avatar: profile.photos[0],
   //}
  }
));

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)

   //const user= {
    //username: profile.displayName,
    //avatar: profile.photos[0],
   //}
  }
));

passport.serializeUser((user,done)=>{
    done(null,user)
})

passport.deserializeUser((user,done)=>{
    done(null,user)
})