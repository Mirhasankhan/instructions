mkdir prisma-mongo-crud
cd prisma-mongo-crud
npm init -y
npm install express @prisma/client dotenv
npm install --save-dev typescript ts-node @types/node @types/express prisma nodemon
npx prisma init
DATABASE_URL="mongodb+srv://<username>:<password>@cluster.mongodb.net/myDatabase?retryWrites=true&w=majority"   (in env file)

// update prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model User {
  id    String @id @default(auto()) @map("_id")
  name  String
  email String @unique
}

npx prisma db push

//create tsconfig.json file
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}

//Create src/prisma/prismaClient.ts:
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default prisma;

//Create src/controllers/userController.ts:
import { Request, Response } from "express";
import prisma from "../prisma/prismaClient";

// Create User
export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({ data: { name, email } });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "User creation failed!" });
  }
};

// Get All Users
export const getUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

// Get Single User
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({ where: { id } });
  user ? res.json(user) : res.status(404).json({ error: "User not found" });
};

// Update User
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const user = await prisma.user.update({
      where: { id },
      data: { name, email },
    });
    res.json(user);
  } catch {
    res.status(404).json({ error: "User not found" });
  }
};

// Delete User
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({ where: { id } });
    res.json({ message: "User deleted successfully" });
  } catch {
    res.status(404).json({ error: "User not found" });
  }
};

//Create src/routes/userRoutes.ts:
import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;

//Create src/server.ts:
import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});

//Create nodemon.json:\
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "ts-node ./src/server.ts"
}
//edit package.json
"scripts": {
  "dev": "nodemon"
}

finally       npm run dev

