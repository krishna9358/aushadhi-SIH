// // import CredentailsProvider from "next-auth/providers/credentials";


// // providers:[
// //     CredentialsProvider({
// //         name: "Credentials",
// //         credentials: {
// //             username: { label: "Username", type: "text" },
// //             password: { label: "Password", type: "password" },
// //           },

// //           async authorize(credentials : Record<string, string> | undefined) {
// //             // Fetch user from your database
// //             const user = await getUser(credentials.username, credentials.password);
    
// //             if (user) {
// //               return { id: user.id, name: user.name, role: user.role };
// //             }
// //             return null;
// //           },
// //     })
// // ]


// import NextAuth, { AuthOptions } from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import { PrismaClient } from '@prisma/client';
// import bcrypt from 'bcrypt';

// const prisma = new PrismaClient();

// export const authOptions: AuthOptions = {
//   session: {
//     strategy: 'jwt',
//   },
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'text' },
//         password: { label: 'Password', type: 'password' },
//         role: { label: 'Role', type: 'text' }, // Role passed in credentials
//       },
//       async authoriz(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error('Email and password are required');
//         }

//         const user = await prisma.user.findUnique({
//           where: {
//             email: credentials.email,
//           },
//         });

//         if (!user) {
//           throw new Error('No user found');
//         }

//         // Compare hashed passwords
//         const isValidPassword = await bcrypt.compare(
//           credentials.password,
//           user.password
//         );

//         if (!isValidPassword) {
//           throw new Error('Invalid password');
//         }

//         // Optional: You can check if the selected role matches the stored user role
//         if (credentials.role && credentials.role !== user.role) {
//           throw new Error('User role mismatch');
//         }

//         return { id: user.id, email: user.email, name: user.name, role: user.role };
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.role = user.role;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token && session.user) {
//         session.user.role = token.role as string;
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: '/signin',
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
