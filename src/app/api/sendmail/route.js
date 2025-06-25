// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, contactNo, reason, description } = await request.json();
    console.log(name, email, contactNo, reason, description);
    // Validate input
    if (!name || !email || !contactNo || !reason || !description) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create transporter
        const transport  = nodemailer.createTransport({
            host: 'smtp.gmail.com',
  port: 465,
  secure: true,
            service: "gmail",
            auth: {
                user: process.env.MAIL_USER, 
                pass: process.env.MAIL_PASSWORD 
              }
        })

    // Email content
    const mailOptions = {
      from: `"Deoria Official Contact Form" <${email}>`,
      to: process.env.MAIL_USER,
      subject: `New Contact Form Submission: ${reason}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9;">New Contact Form Submission</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #0ea5e9;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact No:</strong> ${contactNo}</p>
            <p><strong>Reason:</strong> ${reason}</p>
            <p><strong>Description:</strong></p>
            <div style="background-color: #ffffff; padding: 15px; border-radius: 4px; margin-top: 10px;">
              <p>${description.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          <p style="margin-top: 20px; color: #64748b; font-size: 0.9rem;">
            This message was sent from the Deoria Official contact form.
          </p>
        </div>
      `,
    };

    // Send email
    await transport.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}