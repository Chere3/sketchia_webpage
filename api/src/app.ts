import * as express from 'express';
import helmet from 'helmet';
import {config as dotConfig} from 'dotenv';
import * as csurf from 'csurf';

const app = express()
const csurfProtection = csurf({cookie: true});

// Middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/v0/', require('./routes/index.routes.ts'));
app.use('/v0/users', require('./routes/users.routes.ts'));
app.use('/v0/courses', require('./routes/courses.routes.ts'));
app.use('/v0/login', require('./routes/auth.routes.ts'));
app.all('/*', (req, res) => {
res.redirect(`/v0/${req.path.slice(1)}`)  
})


dotConfig();

export const config = {
  serverConfig: {
    port: process.env.PORT || 3000 as number,
    url: process.env.URL || 'http://localhost',
  }
}

app.listen(config.serverConfig.port, () => {
  console.log(`🔌🔦 | Servidor corriendo en el url ${config.serverConfig.url}:${config.serverConfig.port}`);
});


export default app;