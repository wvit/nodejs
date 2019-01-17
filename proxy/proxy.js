#! /usr/bin/env node

const Koa = require('koa');
const axios = require('axios');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(router.routes());

app.listen(2001, () => {
    console.log('代理已启动', `${process.argv[2]}`)
});

router.all('*', async ctx => {
    await proxy(ctx).then(res => {
        ctx.body = res.data;
    })
})

function proxy(ctx) {
    const method = ctx.request.method;
    const url = ctx.request.url;
    if (method === "GET") {
        return axios.get(process.argv[2] + url)
    } else if (method === "POST") {
        return axios.post(process.argv[2] + url, ctx.request.body)
    }
}