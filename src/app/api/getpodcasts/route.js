import { connectToDB } from "@/dbconfig/dbconfig";
import Podcast from '@/models/podcasts.model';

export async function GET() {
  try {
    await connectToDB();

    const podcasts = await Podcast.find();

    const formatted = podcasts.map((p, index) => ({
      id: p._id.toString(),
      title: p.title,
      description: p.description,
      guestName: p.guestName,
      guestDescription: p.guestDescription,
      date: p.date,
      duration: p.duration,
      category: p.category,
      thumbnail: p.thumbnail
    }));

    console.log(formatted);

    return new Response(JSON.stringify({ podcasts: formatted }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    console.error('Error fetching podcasts:', err);

    return new Response(JSON.stringify({ message: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
