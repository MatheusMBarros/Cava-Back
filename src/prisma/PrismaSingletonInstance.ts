import { PrismaClient } from "@prisma/client";

let prismaInstance: PrismaClient;

prismaInstance = new PrismaClient();

export default prismaInstance;
