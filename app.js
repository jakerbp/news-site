const express = require("express");

const { getTopics, getArticles, getArticle, getEndpoints, getArticleComments, postComment, patchArticle } = require("./controllers/app.controller");

const { handleCustomErrors, handleServerErrors, handle404, handlePsqlErrors } = require("./errors");

const app = express();
app.use(express.json())

app.get('/api/topics', getTopics)

app.get('/api/articles', getArticles)

app.get('/api/articles/:article_id', getArticle)

app.get('/api/articles/:article_id/comments', getArticleComments)

app.patch('/api/articles/:article_id', patchArticle)

app.get('/api', getEndpoints)

app.post('/api/articles/:article_id/comments', postComment)

app.all('*', handle404)
app.use(handleCustomErrors)
app.use(handlePsqlErrors)
app.use(handleServerErrors)
module.exports = app