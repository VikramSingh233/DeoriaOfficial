import { NextResponse } from 'next/server';
import { connectToDB } from '@/dbconfig/dbconfig';
import Blog from '@/models/blog.model';

// Converts Google Drive link to preview format
function convertDriveUrlToPreview(url) {
  const match = url.match(/\/file\/d\/([^/]+)\//);
  if (match && match[1]) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  return url;
}

export async function POST(req) {
  try {
    await connectToDB();

    const posts = await Blog.find().sort({ createdAt: -1 });
    console.log(posts);
    const serializedPosts = posts.map(post => ({
      _id: post._id.toString(),
      title: post.title,
      content: post.content,
      createdAt: post.createdAt.toISOString(),
      imageUrl: convertDriveUrlToPreview(post.imageUrl),
      videoUrl: convertDriveUrlToPreview(post.videoUrl),
    }));
    console.log(serializedPosts);
    return NextResponse.json(serializedPosts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
