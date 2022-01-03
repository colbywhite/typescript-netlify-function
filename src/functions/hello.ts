import {Handler} from '@netlify/functions';
import dotenv from 'dotenv';

dotenv.config();
const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({message: 'Hello, World', event, context})
  };
};

export {handler};
