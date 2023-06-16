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
        const favoris = await prisma.favori.create({data})
        return NextResponse.json(favoris)
    }
    catch(error)
    {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}


export async function GET(){

    const session = await getServerSession(authOptions)
    if(!session)
        return NextResponse.json({message:"Unauthorized : you must be signed in"}, {status: 401})
    try{
        const email = session.user.email
        const user = await prisma.user.findUnique({where:{email}})      
        const favoris = await prisma.favori.findMany({
        where:{
            userId:user.id
            },
        }
        )
        if (favoris.length === 0) 
            return NextResponse.json({ message: "no favorits found" }, { status: 404 })
    return NextResponse.json(favoris)
    } 
    catch(error)
    {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}