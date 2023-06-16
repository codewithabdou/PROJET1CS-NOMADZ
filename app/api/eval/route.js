import { NextResponse } from "next/server"
import{prisma} from "@prisma/globalclient"

import { getServerSession  } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"




export async function POST(request){
    const session = await getServerSession(authOptions)
    if(!session)
        return NextResponse.json({message:"Unauthorized : you must be signed in"}, {status: 401})
    
    try{
        const email = session.user.email
        const user = await prisma.user.findUnique({where:{email}})      
        const predata = await request.json() 
        const data = { ...predata , userId:user.id}
        const evaluation = await prisma.eval.upsert({
            where: { 
                userId_siteId:
                {
                    userId:data.userId,
                    siteId:data.siteId
                }
              },
            create: data,
            update: data,
          })
        // const evaluation = await prisma.eval.create({data})*/
        return NextResponse.json({evaluation}, {status:201})
    }
    catch(error)
    {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}