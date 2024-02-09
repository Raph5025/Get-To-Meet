const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const Blog = require('');
const menuRoutes = require('./routes/blogRoutes');

const app = express();

app.listen(3000);


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.render('login', {title: 'Login Page'});
});
app.get('/feed', (req, res) => {
    res.render('index', {title: 'Home'});
})
app.get('/friends', (req, res) => {
    res.render('friends', {title: 'Friend Requests'});
})
app.get('/chat', (req, res) => {
    res.render('chat', {title: 'Messenger'});
})
app.get('/notifications', (req, res) => {
    res.render('notifications', {title: 'Notifications'});
})

app.use('/menu', menuRoutes);
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});