const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwzPmp5KpVDwWJde3aEidM9moGTRWzHQUMvFQ9TmTU7BYNaKxJq4p-9yQ1rle_iYFtD/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const goal = String(body.goal ?? "").trim();
    const comments = String(body.comments ?? "").trim();

    if (!name || !email || !goal) {
      return Response.json(
        {
          success: false,
          message: "Name, email, and community are required.",
        },
        { status: 400 }
      );
    }

    const googleResponse = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        name,
        email,
        goal,
        comments,
      }),
      redirect: "follow",
    });

    if (!googleResponse.ok) {
      throw new Error("Google Sheets submission failed.");
    }

    return Response.json({
      success: true,
      message: "You have joined the waitlist.",
    });
  } catch (error) {
    console.error("Waitlist submission error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}