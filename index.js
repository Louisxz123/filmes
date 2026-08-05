
import express from "express"
import mysql2 from "mysql2"

const app = express()

app.use(express.json())

app.get("/", (request, response) => {
    response.json({
        message: "CRUD de filmes"
    })
})

app.get("/all-films", (request, response) => {
    const selectCommand = "SELECT * FROM filmes_LuizAkemi"

    sql.query(selectCommand, (error, titulo) => {
        if(error) {
            console.log(error)
            return
        }

        response.json(titulo)
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
            message: "Filme cadastrado seu bosta!"
        })
    })
})

app.delete("/delete-film/:id", (request,response)=> {
    const {id} = request.params

    const deleteCommand = "DELETE FROM filmes_LuizAkemi WHERE id = ?"

    sql.query(deleteCommand, [id], (error) => {
        if(error) {
            console.log(error)
            return
        }

        response.json({
            message: "Filme deletado seu bosta!"
        })
    })
})

app.listen(3000, () => {
    console.log("CRUD de filmes funcionando babaca!")
})  

const sql = mysql2.createPool({
    host: "benserverplex.ddns.net",
    user: "alunos",
    password: "senhaAlunos",
    database: "alunos_filmes03MB"
})