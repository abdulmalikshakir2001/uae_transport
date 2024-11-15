// utils/user.ts
import {prisma} from '@/utils/prisma';

export const findUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  return user;
};
