const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root", // ваш пользователь
    password: "", // ваш пароль
    database: "rew", // ваша база данных
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    console.log("Connected to MySQL!");
});

// Routes
// Создание отзыва
app.post("/reviews", (req, res) => {
    const { name, email, message } = req.body;
    const INSERT_REVIEW_QUERY = `INSERT INTO reviews (name, email, message) VALUES (?, ?, ?)`;
    connection.query(INSERT_REVIEW_QUERY, [name, email, message], (err, results) => {
        if (err) {
            console.error("Error creating review:", err);
            res.status(500).send("Error creating review");
            return;
        }
        res.status(201).send("Review created successfully");
    });
});

// Получение всех отзывов
app.get("/reviews", (req, res) => {
    const SELECT_REVIEWS_QUERY = `SELECT * FROM reviews`;
    connection.query(SELECT_REVIEWS_QUERY, (err, results) => {
        if (err) {
            console.error("Error fetching reviews:", err);
            res.status(500).send("Error fetching reviews");
            return;
        }
        res.status(200).json(results);
    });
});

// Обновление отзыва
app.put("/reviews/:id", (req, res) => {
    const id = req.params.id;
    const { name, email, message } = req.body;
    const UPDATE_REVIEW_QUERY = `UPDATE reviews SET name = ?, email = ?, message = ? WHERE id = ?`;
    connection.query(UPDATE_REVIEW_QUERY, [name, email, message, id], (err, results) => {
        if (err) {
            console.error("Error updating review:", err);
            res.status(500).send("Error updating review");
            return;
        }
        res.status(200).send("Review updated successfully");
    });
});

// Удаление отзыва
app.delete("/reviews/:id", (req, res) => {
    const id = req.params.id;
    const DELETE_REVIEW_QUERY = `DELETE FROM reviews WHERE id = ?`;
    connection.query(DELETE_REVIEW_QUERY, [id], (err, results) => {
        if (err) {
            console.error("Error deleting review:", err);
            res.status(500).send("Error deleting review");
            return;
        }
        res.status(200).send("Review deleted successfully");
    });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
