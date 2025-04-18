import { PrismaClient } from "@/generated/prisma/client";

declare global {

    var prisma: PrismaClient | null;
}
if (!global.prisma) {
    global.prisma = new PrismaClient();
}
export default global.prisma;