// app/api/newsletter/route.js
import { connectToDB } from '@/dbconfig/dbconfig';
import Newsletter from '@/models/NewsLetter.model';

export async function POST(req) {
  try {
    await connectToDB();
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ success: false, message: 'Invalid email address' }), { status: 400 });
    }
    console.log(email);
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return new Response(JSON.stringify({ success: false, message: 'Email already subscribed' }), { status: 409 });
    }

    await Newsletter.create({ email });

    return new Response(JSON.stringify({ success: true, message: 'Subscribed successfully' }), { status: 200 });
  } catch (error) {
    console.error('Subscription error:', error);
    return new Response(JSON.stringify({ success: false, message: 'Server error' }), { status: 500 });
  }
}
