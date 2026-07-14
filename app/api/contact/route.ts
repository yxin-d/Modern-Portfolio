import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

// This route validates and logs submissions. Wire it up to an email
// provider (Resend, Postmark, Nodemailer + SMTP, etc.) before going live —
// see the README for notes.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // TODO: send an email / persist the message here.
  console.log("New contact message:", parsed.data);

  return NextResponse.json({ ok: true });
}
