// app/api/shops/route.js
// import { dbConnect } from "@/lib/dbConnect";
import { connectToDB } from "@/dbconfig/dbconfig";
import Place from "@/models/places.model";
import { NextResponse } from "next/server";

export async function GET() {
    await connectToDB();
  
  try {
    const places  = await Place.find({}); 
    console.log(places );
return NextResponse.json({ success: true, places });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Error fetching shops" }, { status: 500 });
  }
}

