import { NextResponse } from "next/server"
import cloudinary from "cloudinary"

import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient({errorFormat: 'minimal',})

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(request,{params}){
  const { id:sid } = params
  const uploadedImages = [];
  try{
  const data = await request.json()
  for (const file of data.files) {
      const result = await cloudinary.v2.uploader.upload(file, {
        folder: 'Nomadz/'+sid,
      })
      const id = parseInt(sid)
      uploadedImages.push(result)
      await prisma.site.update({
        where: {
          id
        },
        data: {
          images:{
            push: result.url,
          },
        },
      })
  }
  
  return NextResponse.json(uploadedImages)}
  catch(error)
  {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}