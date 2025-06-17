import { NextResponse } from 'next/server';

import History from '@/models/history.model';
import { connectToDB } from '@/dbconfig/dbconfig';

export async function GET() {
  try {
    await connectToDB();

   
    const histories = await History.find();

    // Map to format expected by frontend
    const formattedHistories = histories.map((doc, index) => ({
      id: doc._id.toString(),
      title: doc.name,
      location: doc.location,
      description: doc.description.length > 120 
        ? doc.description.substring(0, 120) + "..."
        : doc.description,
      detailed: doc.description,
      images: doc.images,  // array of image URLs from DB
    }));

    return NextResponse.json({ success: true, data: formattedHistories });
  } catch (error) {
    console.error('Error fetching history data:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch data' }, { status: 500 });
  }
}
