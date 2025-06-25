import { NextResponse } from 'next/server';

import History from '@/models/history.model';
import { connectToDB } from '@/dbconfig/dbconfig';

// Function to convert Google Drive share link to preview format
function convertDriveUrlToPreview(url) {
  const match = url.match(/\/file\/d\/([^/]+)\//);
  if (match && match[1]) {
    const fileId = match[1];
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }
  return url; // return original if invalid
}

export async function GET() {
  try {
    await connectToDB();

    const histories = await History.find();

    // Format the data for frontend
    const formattedHistories = histories.map((doc) => ({
      id: doc._id.toString(),
      title: doc.name,
      location: doc.location,
      description: doc.description.length > 120 
        ? doc.description.substring(0, 120) + "..."
        : doc.description,
      detailed: doc.description,
      images: Array.isArray(doc.images)
        ? doc.images.map(convertDriveUrlToPreview)
        : [],
    }));

    return NextResponse.json({ success: true, data: formattedHistories });
  } catch (error) {
    console.error('Error fetching history data:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch data' }, { status: 500 });
  }
}
