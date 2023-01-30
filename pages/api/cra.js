import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  console. log('[api/cra] request', req.url, req.query);
  let result;

  try {
    const CRA_PATH = path.join(process.cwd(), 'cra');
    const CRA_HTML = await fs.readFile(CRA_PATH + '/cra.html', 'utf8');
    result = CRA_HTML;
  } catch (error) {
    console.error ('[api/cra] error', error);
    result = error;
  }
  
  return res.status(200).send(result);
}
