// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

async function getAll() {
  const allUsers = await prisma.post.findMany({
    where: {
      user_id: {
        gte: 0,
      }, 
  },});
  console.log(allUsers);
  return allUsers;
}
async function search(term) {
  const toReturn = await prisma.post.findMany({
    where: {
      OR: [{title: {
                contains: {term}
              }
            },
            {content: {
                contains: {term}
              }
            }]
    }
  });
  return toReturn;
}

async function write(title, content) {
  await prisma.post.create({
    data: {
      user_id: Math.floor(Math.random()*777428),
      title: title,
      post_id: Math.floor(Math.random()*9575),
      content: content,
    },
  });
  console.log("WRITTEN SOMETHING HAPPENED");
}

export default function handler(req, res) {
  if (req.method === "POST") {
    write(req.title, req.content)
  } 
  if (req.method === "GET") {
    
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
