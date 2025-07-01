import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed categories
  const categories = await prisma.category.createMany({
    data: [
      { catKey: 'celebration', displayName: 'Celebration' },
      { catKey: 'thank-you', displayName: 'Thank You' },
      { catKey: 'inspiration', displayName: 'Inspiration' },
    ],
    skipDuplicates: true,
  });

  // Get categories with their IDs
  const allCategories = await prisma.category.findMany();

  // Helper to get categoryId by catKey
  const getCategoryId = (catKey) =>
    allCategories.find((c) => c.catKey === catKey)?.categoryId ?? 1;

  // Seed boards
  const board1 = await prisma.board.create({
    data: {
      title: 'first one ever!',
      author: 'heiryn',
      coverImg: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2xmNGQxbHhnZXp6dG93OXo2MDV1YjF3NHIzeXdoMDMzbXhwdm4yZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ASd0Ukj0y3qMM/giphy.gif',
      description: 'new dev board',
      categoryId: getCategoryId('celebration'),
      cards: {
        create: [
          {
            title: 'second one ever!',
            description: 'first card - how its going',
            cardImg: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWlueGw1azhxM3dxM3docnRqaTF0cWUza2xwMTA5NWc2MDRvbmNjZiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/0GtVKtagi2GvWuY3vm/giphy.gif',
            author: 'heiryn',
            likes: 10,
          },
          {
            title: 'new card check',
            description: 'how its going',
            cardImg: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWlueGw1azhxM3dxM3docnRqaTF0cWUza2xwMTA5NWc2MDRvbmNjZiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/0GtVKtagi2GvWuY3vm/giphy.gif',
            author: 'heiryn',
            likes: 16,
          },
        ],
      },
    },
  });

  const board2 = await prisma.board.create({
    data: {
      title: 'sorting test',
      author: 'heiryn',
      coverImg: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmZxNmo4aHR3YWZsZ2dvejhpY3o1c21wOHN0eWgycjNwYTdhMmR5aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/FCfd6Eb2pcpWlIHVq3/giphy.gif',
      description: 'new sorting board',
      categoryId: getCategoryId('thank-you'),
    },
  });

  // Optionally, add more boards/cards here

  console.log('Seed complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });