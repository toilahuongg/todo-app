// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase }  from '../../../middleware/mongodb';
import { Todo } from '../../../models/todo';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    await connectToDatabase();
    const todoList = await Todo.find();
    res.status(200).json(todoList)
  }
}
