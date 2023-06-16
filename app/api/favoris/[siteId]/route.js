import { NextResponse } from "next/server"
import{prisma} from "@prisma/globalclient"

import { getServerSession  } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]/route"




export async function DELETE(request ,{params}){
    const { siteId } = params
    const parsedId = parseInt(siteId)
    const session = await getServerSession(authOptions)
    if(!session)
        return NextResponse.json({message:"Unauthorized : you must be signed in"}, {status: 401})

    if(!parsedId)
            return NextResponse.json({ message: "Invalid site Id" }, { status: 400 })
    try{
        const email = session.user.email
        const user = await prisma.user.findUnique({where:{email}})      
        const deletedRecord = await prisma.favori.delete({
            where: { 
                userId_siteId:{
                   siteId:parsedId,
                   userId:user.id                
                }
            },
          });
      
        return NextResponse.json({ message: 'Record deleted successfully', data: deletedRecord })
    }
    catch(error)
    {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}
