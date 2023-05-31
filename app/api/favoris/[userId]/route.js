import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export async function GET(request ,{params}){

    const { userId } = params
    try{
        const favoris = await prisma.favori.findMany({
        where:{userId},
        }
        )
        if (favoris.length === 0) 
            return NextResponse.json({ message: "no sites found" }, { status: 404 })
    return NextResponse.json(favoris)
    } 
    catch(error)
    {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}