import type {NextApiRequest, NextApiResponse} from 'next'
import prisma from "../../lib/databaseUtil";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const account = await prisma.user.findMany();

    return res.status(200).json(account);
}
