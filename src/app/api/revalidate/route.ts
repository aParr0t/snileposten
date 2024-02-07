import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  revalidatePath("/", "layout");
  console.log("Path revalidated");

  return NextResponse.json("Path revalidated", {
    status: 200,
  });
}
