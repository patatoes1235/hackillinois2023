import { resolve } from 'styled-jsx/css';
import { PrismaClient } from '@prisma/client';
import { useRouter } from 'next/router';
import Link from 'next/link';

const prisma = new PrismaClient({ log: ['query', 'info'] });


export default function handler(req, res) {
  if (req.method !== 'POST') res.status(400).json({ERROR: error});
  let obj = {
    data: {
      id_token: req.credential
    }
  }
  prisma.users.create(obj);
  res.status(200).json({Text: "SUCCESS"});
}
// function handler(req, res) {


// }
