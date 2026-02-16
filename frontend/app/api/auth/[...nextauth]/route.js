import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  session: {
    strategy: "jwt"
  },

  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials)
        })

        const data = await res.json()
        if (!res.ok) return null

        // return data and store in session
        return {
          id: data.details.user.id,
          name: data.details.user.name,
          email: data.details.user.email,
          accessToken: data.details.token
        }
      }
    })
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken
      }
      return token
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken
      return session
    }
  },

  secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

