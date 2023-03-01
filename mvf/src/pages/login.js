import { PrismaClient } from '@prisma/client';
import { useRouter } from 'next/router';
import { Router } from 'react-bootstrap-icons';

const prisma = new PrismaClient({ log: ['query', 'info'] });

async function addUser(req) {
  console.log(req);
  console.log("success");
  const router = useRouter();
  router.push("/post");
}

export default function handler(req, res) {
  // console.log(req);
  // console.log("success");
  // const router = useRouter();
  // router.push("/post");

  return (
    <h5>
      LOGIN SUCCESS! redirecting...
    </h5>
  );
  
}