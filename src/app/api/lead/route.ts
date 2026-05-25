import { NextRequest, NextResponse } from "next/server";
import { submitLead } from "@/lib/sheets";
import type { LeadManufactura, LeadNegocios } from "@/lib/types";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LeadManufactura | LeadNegocios;
    await submitLead(body);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead submission error:", err);
    return NextResponse.json({ error: "Error al enviar" }, { status: 500 });
  }
}
