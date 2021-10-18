const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

app.get("/tasks", (req, res) => {
	res.json([]);
});

app.post("/tasks", (req, res) => {
	const { title, description } = req.body;

	if (!title || !description) return res.sendStatus(400);

	res.json({ id: uuidv4(), title, description });
});

module.exports = app;
