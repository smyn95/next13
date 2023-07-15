import type { NextApiRequest, NextApiResponse } from 'next';

type data = {
    name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<data>) {
    res.status(200).json({ name: 'John Doe' });
}
