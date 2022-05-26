import { NextApiRequest, NextApiResponse } from 'next';

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    try {
        await res.unstable_revalidate('/static-rendering-with-increment-static-regeneration')
        return res.json({ revalidated: true })
    } catch (err) {
        // If there was an error, Next.js will continue
        // to show the last successfully generated page
        return res.status(500).send('Error revalidating')
    }
};

export default handle;
