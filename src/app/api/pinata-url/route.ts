import { NextResponse } from "next/server";
import { pinata } from "@/core/utils/config";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const url = await pinata.upload.public.createSignedURL({
            expires: 30,
        });

        return NextResponse.json({ url }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to create signed URL" },
            { status: 500 }
        );
    }
}