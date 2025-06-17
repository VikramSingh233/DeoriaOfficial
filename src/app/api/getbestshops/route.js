// app/api/shops/route.js
// import { dbConnect } from "@/lib/dbConnect";
import { connectToDB } from "@/dbconfig/dbconfig";
import Shop from "@/models/shop.model";
import { NextResponse } from "next/server";

export async function GET() {
    await connectToDB();
  
  try {
    const shops = await Shop.find({}); 
    console.log(shops);
return NextResponse.json({ success: true, shops });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Error fetching shops" }, { status: 500 });
  }
}

