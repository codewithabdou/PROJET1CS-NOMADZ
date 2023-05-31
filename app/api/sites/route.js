import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export async function GET(request){
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');
    const wilaya = searchParams.get('wilaya');
    const categorie = searchParams.get('categorie');
    const theme = searchParams.get('theme');
    try{
    const sites = await prisma.site.findMany(
        {
            where: {
              name: {
                contains: name || undefined, mode: 'insensitive',
              },
              wilaya: {
                equals: wilaya || undefined, mode: 'insensitive',
              },
              categorie: {
                equals: categorie || undefined, mode: 'insensitive',
              },
              theme: {
                equals: theme || undefined, mode: 'insensitive',
              },
            },
          })
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