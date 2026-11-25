
import { Resend } from "resend";

function escapeHtml(value) {
    return value.replace(/[&<>"']/g, (character) => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;",
        };

        return entities[character];
    });
}

export async function POST(request) {
    try {
        // Check environment variables
        const apiKey = process.env.RESEND_API_KEY;
        const recipient = process.env.CONTACT_EMAIL;

        if (!apiKey || !recipient) {
            return Response.json(
                { message: "Email service is not configured yet." },
                { status: 500 }
            );
        }

        // Read submitted information
        const body = await request.json();

        const name =
            typeof body.name === "string" ? body.name.trim() : "";

        const email =
            typeof body.email === "string"
                ? body.email.trim().toLowerCase()
                : "";

        const message =
            typeof body.message === "string"
                ? body.message.trim()
                : "";

        // Validate fields
        if (!name || !email || !message) {
            return Response.json(
                { message: "All fields are required." },
                { status: 400 }
            );
        }

        if (name.length > 80) {
            return Response.json(
                { message: "Name is too long." },
                { status: 400 }
            );
        }

        if (
            email.length > 254 ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ) {
            return Response.json(
                { message: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        if (message.length < 10 || message.length > 3000) {
            return Response.json(
                { message: "Message must be between 10 and 3000 characters." },
                { status: 400 }
            );
        }

        // Escape user input before inserting into HTML
        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

        // Initialize Resend
        const resend = new Resend(apiKey);

        // Send inquiry email
        const { data, error } = await resend.emails.send({
            from:
                process.env.RESEND_FROM_EMAIL ||
                "Jareer Portfolio <onboarding@resend.dev>",

            to: [recipient],

            replyTo: email,

            subject: `New Portfolio Inquiry from ${name}`,

            html: `
        <!DOCTYPE html>
        <html>
          <body style="margin:0;padding:30px;background:#080d09;font-family:Arial,sans-serif;color:#ffffff;">

            <div style="max-width:600px;margin:auto;background:#101812;border:1px solid #234432;border-radius:16px;overflow:hidden;">

              <div style="padding:25px;background:#12251a;border-bottom:2px solid #34d399;">
                <h2 style="margin:0;color:#34d399;">
                  New Portfolio Inquiry
                </h2>
                <p style="margin:8px 0 0;color:#b4c8ba;">
                  Someone has contacted you through your portfolio.
                </p>
              </div>

              <div style="padding:30px;">

                <p style="color:#9ca3af;font-size:12px;">SENDER NAME</p>
                <h3 style="margin-top:5px;color:#ffffff;">
                  ${safeName}
                </h3>

                <p style="color:#9ca3af;font-size:12px;">EMAIL ADDRESS</p>
                <p style="color:#34d399;">
                  ${safeEmail}
                </p>

                <p style="color:#9ca3af;font-size:12px;">MESSAGE</p>

                <div style="padding:18px;background:#080d09;border-radius:10px;color:#e5e7eb;line-height:1.8;">
                  ${safeMessage}
                </div>

                <a
                  href="mailto:${safeEmail}"
                  style="display:inline-block;margin-top:25px;padding:13px 22px;background:#34d399;color:#061009;text-decoration:none;font-weight:bold;border-radius:8px;"
                >
                  Reply to Inquiry
                </a>

              </div>

              <div style="padding:18px;text-align:center;border-top:1px solid #234432;color:#6b7280;font-size:12px;">
                Sent through Jareer Ahmad Khan's Developer Portfolio.
              </div>

            </div>

          </body>
        </html>
      `,

            text: `
New Portfolio Inquiry

Name: ${name}
Email: ${email}

Message:
${message}
      `,
        });

        if (error) {
            console.error("Resend API Error:", error);

            return Response.json(
                { message: "Unable to send your inquiry. Please try again." },
                { status: 502 }
            );
        }

        return Response.json(
            {
                success: true,
                message: "Your inquiry has been sent successfully!",
                id: data?.id,
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("Contact API Error:", error);

        return Response.json(
            { message: "Something went wrong. Please try again later." },
            { status: 500 }
        );
    }
}
