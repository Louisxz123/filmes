
import express from "express"
import mysql2 from "mysql2"

const app = express()

app.use(express.json())

app.get("/", (request, response) => {
    response.json({
        message: "Servidor do ToDo"
    })
})

app.get("/active-tasks", (request, response) => {
    const selectCommand = "SELECT * FROM ToDo_LuizF WHERE status = 0"

    sql.query(selectCommand, (error, data) => {
        if(error) {
            console.log(error)
            return
        }

        response.json(status)
    })
})

app.get("/completed-tasks", (request, response)=> {
    const selectCommand = "SELECT * FROM ToDo_LuizF WHERE status = 1"

    sql.query(selectCommand, (error, data) => {
        if(error) {
            console.log(error)
            return
        }

        response.json(status)
    })
})

app.get("/all-films", (request, response) => {
    const selectCommand = "SELECT * FROM filmes_LuizAkemi"

    sql.query(selectCommand, (error, data) => {
        if(error) {
            console.log(error)
            return
        }

        response.json(status)
    })
})

app.post("/create-film", (request, response) => {
    const {titulo, genero, duracao, classificacao} = request.body

    const insertCommand = "INSERT INTO filmes_LuizAkemi(titulo, genero, duracao, classificacao) VALUES (?, ?, ?, ?)"

    sql.query(insertCommand, [titulo, genero, duracao, classificacao], (error) => {
        if(error) {
            console.log(error)
            return
        }

        response.status(201).json({
            message: "Filme cadastrado!"
        })
    })
})

app.listen(3000, () => {
    console.log("Servidor do ToDo FUNCIONANDO")
})  

const sql = mysql2.createPool({
    host: "benserverplex.ddns.net",
    user: "alunos",
    password: "senhaAlunos",
    database: "alunos_filmes03MB"
})