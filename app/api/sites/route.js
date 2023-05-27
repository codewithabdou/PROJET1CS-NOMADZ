import { NextResponse } from "next/server";
const { PrismaClient } = require('@prisma/client');


const prisma = new PrismaClient()


export async function GET(request){
    try{
    const sites = await prisma.site.findMany()
    if (sites.length === 0) 
            return NextResponse.json({ message: "no sites found" }, { status: 404 })
    return NextResponse.json(sites)
    } 
    catch(error)
    {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}

export async function POST(request){
    try{
        const data = await request.json()
        const site = await prisma.site.create({data})
        return NextResponse.json(site)
    }
    catch(error)
    {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}