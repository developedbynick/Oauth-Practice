import express from 'express';
import passport from 'passport'
import session from 'express-session';
import sessionStore from 'connect-mongo'
import env from './env';
const app = express();
app.use(express.json());
app.use(session({
    secret: env.SESSION_SECRET,
    cookie: {
        maxAge: 24 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
    store: sessionStore.create({ mongoUrl: env.MONGO, collectionName: 'session' }),
    saveUninitialized: false,
    resave: false
}))
app.use(passport.initialize());
app.use(passport.session())

export default app;