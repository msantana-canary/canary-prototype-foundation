import { NextRequest, NextResponse } from "next/server";
import { writeFileSync } from "fs";
import { join } from "path";

export async function POST(req: NextRequest) {
  const { filename, data } = await req.json();
  const base64 = data.replace(/^data:image\/\w+;base64,/, "");
  const outPath = join(process.cwd(), "public", "screenshots", filename);
  writeFileSync(outPath, Buffer.from(base64, "base64"));
  return NextResponse.json({ ok: true, path: `/screenshots/${filename}` });
}
