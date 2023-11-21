const express = require("express");
const { getTopics, getArticle, getEndpoints, getArticleComments } = require("./controllers/app.controller");
const { handleCustomErrors, handleServerErrors, handlePsqlErrors } = require("./errors");
const app = express();
app.use(express.json())

app.get('/api/topics', getTopics)

app.get('/api/articles/:article_id', getArticle)

app.get('/api/articles/:article_id/comments', getArticleComments)

app.get('/api', getEndpoints)

app.use(handleCustomErrors)
app.use(handlePsqlErrors)
app.use(handleServerErrors)
module.exports = app