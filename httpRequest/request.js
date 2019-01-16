#! /usr/bin/env node

const inquirer = require('inquirer');
const axios = require('axios');
const program = require('commander');
const chalk = require('chalk');

program
    .version('0.0.1')
    .parse(process.argv)

const options = [{
        type: "input",
        name: "method",
        message: "request type(请求类型) : "
    },
    {
        type: "input",
        name: "url",
        message: "request url(请求地址) : "
    },
    {
        type: "input",
        name: "data",
        message: "request arguments(请求参数) : "
    }
]

inquirer.prompt(options).then(result => {
    console.log(result)
    if (result.method.toUpperCase() === 'GET') {
        let data = '';
        for (let key in data) {
            reqData += `${key}=${data[key]}&`
        }
        return axios.get(`${result.url}?${data.slice(0, -1)}`);
    } else if (result.method.toUpperCase() === 'POST') {
        return axios.post(result.url, result.data);
    }
}).then(res => {
    console.log(chalk.hex('#85991c')(JSON.stringify(res.data, null, 2)));
})