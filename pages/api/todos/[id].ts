// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../middleware/mongodb';
import { Todo } from '../../../models/todo';
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {
        query: { id },
        method,
    } = req
    await connectToDatabase();
    switch (method) {
        case 'DELETE':
            await Todo.deleteOne({_id: id});
            res.status(200).json("ok")
            break
        default:
            res.setHeader('Allow', ['DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }

}
