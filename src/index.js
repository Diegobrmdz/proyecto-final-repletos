/* -------------------------- Import ---------------------- */
import express from 'express'
import morgan from 'morgan';
import {join, dirname} from 'path'
import {fileURLToPath} from 'url'
import { engine } from 'express-handlebars';
import personasRoutes from './routes/personas.routes.js'

/* ----------------------------- initializacion ----------------------------- */
const app = express();
/*evitar colisiones de nombre de variable*/
const __dirname = dirname(fileURLToPath(import.meta.url));

/* --------------------------------- setting -------------------------------- */
app.set('port' , process.env.PORT || 3000 )
app.set('views' , join(__dirname, 'views'));
app.engine('.hbs' , engine({
    defaultLayout: 'main' ,
    layoutsDir: join(app.get('views'), 'layous'),
    partialsDir: join(app.get('views'), 'partials'), 
    extname: '.hbs'
}));
app.set('view engine' , '.hbs');

/* ------------------------------- middlewares ------------------------------ */
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

/* ---------------------------------- route --------------------------------- */
app.get('/' , (req, res) => {
    res.render('index')
});

app.use(personasRoutes);


/* ------------------------------ public files ------------------------------ */
app.use(express.static(join(__dirname, 'public')));

/* ------------------------------- run server ------------------------------- */
app.listen(app.get('port'), () => {
    console.log('server listening on port' , app.get('port'));
} );


