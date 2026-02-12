import { Stats } from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Hi how are you",
    Stats: "Success",
    field: "none",
  });
}
