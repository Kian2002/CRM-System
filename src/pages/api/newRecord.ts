import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  const { name, email, phone, address, city, state, zipcode } = req.body;

  try {
    await prisma.posts.create({
      data: {
        name,
        email,
        phone,
        address,
        city,
        state,
        zipcode,
      },
    });

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
