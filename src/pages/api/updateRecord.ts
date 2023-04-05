import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  const { id, name, address, city, state, zipcode } = req.body;
  try {
    await prisma.posts.update({
      where: {
        id: Number(id),
      },
      data: {
        name: name,
        address: address,
        city: city,
        state: state,
        zipcode: Number(zipcode),
      },
    });

    res.status(200).json({ message: "Post updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
