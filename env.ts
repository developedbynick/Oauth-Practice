import { cleanEnv, port, str } from 'envalid';
const env = cleanEnv(process.env, {
    PORT: port(),
    MONGO: str(),
    SESSION_SECRET: str()
})
export default env;