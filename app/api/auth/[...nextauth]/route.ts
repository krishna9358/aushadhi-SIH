import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID ?? "",
          clientSecret: process.env.GOOGLE_SECRET ?? "",
        }),
        
    ],
    pages: {
        signIn: "/login", // Optional: Redirect to your custom sign-in page
      },
})

export { handler as GET, handler as POST }