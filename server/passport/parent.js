const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");
const Parent = require("../model/Parent/Parent");

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
GITHUB_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const newParent = {
        Id: profile.id,
        username: profile.displayName,
        // email: profile.email,
        image: profile.photos[0].value,
      };

      try {
        let parent = await Parent.findOne({ googleId: profile.id });
        if (parent) {
          done(null, parent);
        } else {
          parent = await Parent.create(newParent);
          done(null, parent);
        }
      } catch (err) {
        console.error(err);
      }
    }
  )
);

// passport.use(
//   new GithubStrategy(
//     {
//       clientID: GITHUB_CLIENT_ID,
//       clientSecret: GITHUB_CLIENT_SECRET,
//       callbackURL: "/auth/github/callback",
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       const newParent = {
//         googleId: profile.id,
//         displayName: profile.displayName,
//         firstName: profile.name.givenName,
//         lastName: profile.name.familyName,
//         image: profile.photos[0].value,
//       };

//       try {
//         let parent = await Parent.findOne({ googleId: profile.id });

//         if (parent) {
//           done(null, parent);
//         } else {
//           parent = await Parent.create(newParent);
//           done(null, parent);
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   )
// );

passport.serializeUser((parent, done) => {
  done(null, parent.id);
});

passport.deserializeUser((id, done) => {
  Parent.findById(id, (err, parent) => done(err, parent));
});
