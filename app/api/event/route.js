import { NextResponse } from "next/server"
import { Prisma } from '@prisma/client'
import{prisma} from "@prisma/globalclient"

import { getServerSession  } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"





export async function POST(request){
    try{
        const data = await request.json()
        const event = await prisma.event.create({data})
        return NextResponse.json(event, {status:201})
    }
    catch(error)
    {
      if (error instanceof Prisma.PrismaClientKnownRequestError) 
        if (error.code === 'P2002') 
          return NextResponse.json({ message: error.message }, { status: 409})
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}





export async function GET(){
    const session = await getServerSession(authOptions)
    if(!session)
        return NextResponse.json({message:"Unauthorized : you must be signed in"}, {status: 401})
    try{
        const user = await prisma.user.findUnique({
            where: {
              email: session.user.email, 
            },
            include: {
              favoris: {
                include: {
                  site: {
                    include: {
                      events: {
                        select: {
                            id:true,
                            name:true,
                            description:true,
                            date:true
                        }
                      },
                    },
                  },
                },
              },

            },
          })
        const events = user.favoris.flatMap(favori => favori.site.events)
        if (events.length === 0) 
            return NextResponse.json({ message: "no events found" }, { status: 404 })
    return NextResponse.json(events)
    } 
    catch(error)
    {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}