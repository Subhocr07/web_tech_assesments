const { connection } = require('./connector')
const { data } = require('./data')
const express=require("express");

const refreshAll = async () => {
    await connection.deleteMany({})
    // console.log(connection)
    await connection.insertMany(data)
}
refreshAll()

