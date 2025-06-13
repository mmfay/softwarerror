import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // You can add logic here: store in DB, send an email, etc.
    console.log("Contact Form Submission:", { name, email, phone, message });

    return NextResponse.json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
