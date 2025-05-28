import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { JWT } from "next-auth/jwt";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, user, trigger, session }) {
      // Adiciona claims customizados ao JWT
      if (account && user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.accessTokenExpires = account.expires_at * 1000;
      }
      // Refresh automático do accessToken se expirado
      if (
        trigger === "update" &&
        Date.now() > token.accessTokenExpires &&
        token.refreshToken
      ) {
        // Exemplo: lógica para refresh com Cognito/Google/etc
        // const newTokens = await refreshAccessToken(token.refreshToken)
        // token.accessToken = newTokens.access_token
        // token.accessTokenExpires = newTokens.expires_at * 1000
      }
      return token;
    },
    async session({ session, token }) {
      // Expõe claims customizados na sessão
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      session.accessToken = token;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
