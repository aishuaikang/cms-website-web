import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ uuid: string }> }
) {
    const { uuid } = await params;
    console.log("uuid", uuid);
    const res = await fetch(
        process.env.BASE_API + "/common/image/download/" + uuid,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: request.headers.get("Authorization") || "",
            },
        }
    );
    if (res.status !== 200) {
        return new Response("获取图片失败", { status: res.status });
    }

    const imageBuffer = await res.arrayBuffer();

    return new NextResponse(imageBuffer, {
        headers: {
            "Content-Type": res.headers.get("Content-Type") || "image/jpeg",
        },
    });
}
