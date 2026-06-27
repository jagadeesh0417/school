import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const enquiry = await prisma.enquiry.create({
      data: { name, email, phone, message, source: "website" },
    });

    return NextResponse.json({ success: true, enquiry }, { status: 201 });
  } catch (error) {
    console.error("Enquiry error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const enquiries = await prisma.enquiry.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json(enquiries);
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
