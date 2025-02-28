import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await connectToDatabase();

      // Check if the user already exists
      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        // Create new user in MongoDB
        await User.create({
          name: user.name,
          email: user.email,
          image: user.image,
        });
      }

      return true;
    },
    async session({ session }) {
      await connectToDatabase();
      const user = await User.findOne({ email: session.user.email });

      if (user) {
        session.user.id = user._id;
      }

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
