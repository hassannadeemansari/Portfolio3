// app/api/contact/route.ts
import { NextResponse } from "next/server";
import connectDB from "../../lib/mongodb";
import Contact from "../../models/Contact";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const newContact = new Contact(body);
    await newContact.save();
    return NextResponse.json({ success: true, message: "Message sent!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
