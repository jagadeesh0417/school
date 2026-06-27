import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    if (!prisma) {
      return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    }
    const body = await request.json();
    const { childName, dob, ageGroup, gender, parentName, relation, email, phone, alternatePhone, address, city, pincode, heardAbout, message } = body;

    if (!childName || !dob || !ageGroup || !parentName || !relation || !email || !phone || !address || !city) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const admission = await prisma.admission.create({
      data: { childName, dob, ageGroup, gender, parentName, relation, email, phone, alternatePhone, address, city, pincode, heardAbout, message },
    });

    return NextResponse.json({ success: true, admission }, { status: 201 });
  } catch (error) {
    console.error("Admission error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    if (!prisma) {
      return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    }
    const admissions = await prisma.admission.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json(admissions);
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
