import { NextResponse } from "next/server"
import { Prisma } from '@prisma/client'
import { prisma } from "@prisma/globalclient"

import { getServerSession  } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]/route"




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
                      user: {
                        select: {name:true,}
                      }
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
        const session = await getServerSession(authOptions)
        if(session){
            const email = session.user.email
            const {id:userId} = await prisma.user.findUnique({where:{email}})
            const favoured = Boolean(await prisma.favori.findUnique({
                where:{ userId_siteId:
                        {
                            userId,
                            siteId:parsedId,
                        }
                }
            }))
            console.log(favoured)
        const xsite = {...site,favoured}
        return NextResponse.json(xsite)
        }
    return NextResponse.json(site)
    } 
    catch(error)
    {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}


export async function PUT(request,{params}){
    try{
        const { id } = params
        const parsedId = parseInt(id)
        const data = await request.json()
        const site = await prisma.site.update({
          where: {
            id:parsedId
          },
          data
        })
        if (!site) 
            return NextResponse.json({ message: "Site not found" }, { status: 404 })
        return NextResponse.json({message: 'site updated',data :site})
    }
    catch(error)
    {
        if (error instanceof Prisma.PrismaClientKnownRequestError) 
            if (error.code === 'P2025') 
            return NextResponse.json({ message: 'record not found'}, { status: 404 })
        return NextResponse.json({ message: error.message}, { status: 500 });
    }
}



export async function DELETE(request ,{params}){
    const { id } = params
    const parsedId = parseInt(id)
    if(!parsedId)
            return NextResponse.json({ message: "Invalid site Id" }, { status: 400 })
    try{
        const deletedRecord = await prisma.site.delete({
            where: { id:parsedId },
          });
      
          return NextResponse.json({ message: 'Record deleted successfully', data: deletedRecord })
    }
    catch(error)
    {
        if (error instanceof Prisma.PrismaClientKnownRequestError) 
         if (error.code === 'P2025') 
            return NextResponse.json({ message: 'record not found'}, { status: 404 })
        return NextResponse.json({ message: error.message , code:error.code}, { status: 500 })
    }
}
