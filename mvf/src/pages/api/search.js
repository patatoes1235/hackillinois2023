// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { resolve } from 'styled-jsx/css';
import { PrismaClient } from '@prisma/client';

// const { PrismaClient } = require('@prisma/client')

const prisma_s = new PrismaClient({ log: ['query', 'info'] });
// console.log(prisma);
console.log(prisma_s.posts);

async function getAll() {
  console.log("GET ALL CALLED");
  const allUsers = await prisma_s.posts.findMany({
    where: {
      user_id: {
        gte: 0,
      }, 
  },});
  console.log(allUsers);
  return allUsers;
}
async function search(term) {
  console.log("TERM: ", term);
  const toReturn = await prisma_s.posts.findMany({
    where: {
      OR: [{title: {
                contains: term
              }
            },
            {content: {
                contains: term
              }
            }]
    }
  });
  console.log("SEARCH CALLED ", toReturn);
  return toReturn;
}

async function write(title, content) {
  let obj = {
    data: {
      user_id: Math.floor(Math.random()*79),
      title: title,
      post_id: Math.floor(Math.random()*9575),
      content: content,
    },
  };
  console.log("\n\n DATA: ", obj);
  await prisma_s.posts.create(obj);
  console.log("WRITTEN SOMETHING HAPPENED");
}

export default function handler(req, res) {
  // console.log(req);
  console.log(prisma_s.posts);
  req.method = req.method.toLowerCase();
  if (req.method === 'post') {
    return new Promise((resolve, reject)=> {
      write(req.body.title, req.body.content).then(response=>{
        res.status(200).json({Sucess: "Sucess"});
        resolve();
      })
    }).catch(error => {
      res.status(405).json(error);
      resolve();
    });
  } 
  if (req.method === 'get') {
    console.log("KEYWORD: ", req.query.getAll);
      console.log("IF CALLED");
      return new Promise((resolve, reject)=> {
        search(req.query.keyword).then((out) => {
        res.status(201).json(out);
        resolve();
      }).catch(error => { 
        res.status(405).json(error);
        resolve();
      });
    });
  } 
  res.status(404).json({Text: "HTTP req. not valid"});
}

// listen()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   });
