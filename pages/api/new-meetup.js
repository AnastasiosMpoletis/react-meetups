/**
 * Only server functionality.
 * Folder must be name api for Next.js to recognise it.
 */

function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const { title, image, address, description } = data;
  }
}

export default handler;