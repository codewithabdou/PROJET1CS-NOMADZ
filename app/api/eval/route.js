import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export async function POST(request){
    try{
        const data = await request.json()
        const evaluation = await prisma.eval.create({data})
        return NextResponse.json(evaluation)
    }
    catch(error)
    {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}