import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import{prisma} from "@prisma/globalclient"
import bcrypt from "bcryptjs"





export const authOptions = {
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),

    CredentialsProvider({
        // The name to display on the sign-in form (e.g., "Sign in with email")
        name: 'Credentials',
        credentials: {
          // The fields for the user credentials (e.g., email, password)
          email: { label: 'Email', type: 'text' },
          password: { label: 'Password', type: 'password' }
        },
        authorize: async (credentials) => {
          const { email, password } = credentials;
          const user = await prisma.admin.findUnique({where:{email}})
          if(!user)
              return Promise.resolve(null);
          const result = bcrypt.compareSync(password, user.password)
          if (result) {
            return Promise.resolve(user);
          } else {
            return Promise.resolve(null);
          }
        }
      })  
],
secret: process.env.JWT_SECTET,

callbacks: {
async signIn({user,account}) {
  if(account.provider === "google"){
    console.log("user sign in")
  const {id, email,name} = user
  try{
  await prisma.user.upsert({
    where: {id},
    create: {id,email,name},
    update: {id,email,name},
  })
  }catch(error){
    console.log(error)
    return false
  }
  }
  else
  {
    console.log("admin sign in")
  }
  return true;
},
},
}


const handler = NextAuth(authOptions)
  
  export { handler as GET, handler as POST }