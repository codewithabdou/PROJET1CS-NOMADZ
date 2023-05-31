import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export async function GET(request ,{params}){

    const { id } = params
    const parsedId = parseInt(id)
    if(!parsedId)
            return NextResponse.json({ message: "Invalid site Id" }, { status: 400 })
    try{
        const site = await prisma.site.findUnique({
        where:{id: parsedId},
        include: {
                evals: {
                    select: {
                      stars: true,
                      comment: true,
                      userId: true
                    }
                },
                events: {
                    select: {
                        id:true,
                        name:true,
                        description:true,
                        date:true
                    }
                },
              },
        }
        )
        if (!site) 
            return NextResponse.json({ message: "Site not found" }, { status: 404 })
    return NextResponse.json(site)
    } 
    catch(error)
    {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}