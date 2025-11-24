import { prisma } from "../lib/prisma.js";

export const getAllJokes = async (_req, res) => {
  const jokes = await prisma.joke.findMany();
  res.json(jokes);
};

const selectJokeById = async (id) => {
  const joke = await prisma.joke.findUnique({
    where: { id: Number.parseInt(id) },
  });
  return joke;
};

export const getJokeById = async (req, res) => {
  const requestId = req.params.id;
  const joke = await selectJokeById(requestId);
  res.json(joke);
};

export const getRandomJoke = async (_req, res) => {
  const totalJokes = await prisma.joke.count();
  const randomId = Math.floor(Math.random() * totalJokes);
  const joke = await selectJokeById(randomId);
  res.status(200).json(joke);
};

export const createJoke = async (req, res) => {
  const text = req.body.text;

  const newJoke = await prisma.joke.create({
    data: { text },
  });
  res.status(201).json(newJoke);
};
