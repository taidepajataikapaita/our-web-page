import dotenv from 'dotenv';

interface Config {
  PORT: number;
  MONGODB_URI: string;
  NODE_ENV: 'development' | 'production' | 'test';
}

dotenv.config();

if (!process.env.MONGODB_URI) {
  throw new Error('MONGODB_URI environment variable is required');
}

const config: Config = {
  PORT: Number(process.env.PORT) || 3000,
  MONGODB_URI: process.env.MONGODB_URI,
  NODE_ENV: (process.env.NODE_ENV as Config['NODE_ENV']) || 'development'
};

export default config;