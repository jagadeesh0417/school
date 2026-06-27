import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const contact = await prisma.contact.create({
      data: { name, email, phone, message },
    });

    return NextResponse.json({ success: true, contact }, { status: 201 });
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json(contacts);
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
