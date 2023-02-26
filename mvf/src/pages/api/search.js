// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

async function listen() {
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
  return allUsers;
}

async function write() {
  await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
      posts: {
        create: { title: 'Hello World' },
      },
      profile: {
        create: { bio: 'I like turtles' },
      },
    },
  });
  console.log("WRITTEN SOMETHING HAPPENED");
}

async function publish() {
  const post = await prisma.post.update({
    where: { id: 1 },
    data: { published: true },
  });
  console.log(post);
}

export default function handler(req, res) {
  write();
  publish();
  res.status(200).json({Text: "I THINK THIS WORKED?"});
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
