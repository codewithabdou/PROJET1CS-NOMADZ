import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export async function GET(request ,{params}){

    const { userId } = params
    try{
        const user = await prisma.user.findMany({
            where: {
              id: userId, 
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
        const events = user[0].favoris.flatMap(favori => favori.site.events)
        if (events.length === 0) 
            return NextResponse.json({ message: "no sites found" }, { status: 404 })
    return NextResponse.json(events)
    } 
    catch(error)
    {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}