import { prisma } from 'db/client'


export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <div>
      user: {JSON.stringify(users)}
    </div>
  );
}
