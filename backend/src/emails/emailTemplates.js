export function createWelcomeEmailTemplate(name, clientURL) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to ChatSphere</title>
</head>

<body style="margin:0; padding:0; background-color:#f4f6f8; font-family: Arial, Helvetica, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 6px 18px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background-color:#4f46e5; padding:30px; text-align:center;">
              <div style="width:64px; height:64px; background:#ffffff; border-radius:50%; margin:0 auto 15px auto; line-height:64px; font-size:28px; font-weight:bold; color:#4f46e5;">
                CS
              </div>
              <h1 style="margin:0; color:#ffffff; font-size:26px; font-weight:600;">
                Welcome to ChatSphere
              </h1>
              <p style="margin:8px 0 0; color:#dbeafe; font-size:14px;">
                Real-time conversations, simplified
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:35px;">
              <p style="font-size:16px; color:#111827; margin-top:0;">
                Hi <strong>${name}</strong>,
              </p>

              <p style="font-size:15px; color:#374151; line-height:1.6;">
                Welcome to <strong>ChatSphere</strong>! You’re all set to start real-time conversations with people who matter to you — fast, secure, and simple.
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb; border-radius:8px; margin:25px 0;">
                <tr>
                  <td style="padding:20px;">
                    <p style="margin:0 0 10px; font-size:15px; font-weight:600; color:#111827;">
                      Get started in minutes:
                    </p>
                    <ul style="padding-left:18px; margin:0; color:#374151; font-size:14px;">
                      <li style="margin-bottom:8px;">Complete your profile</li>
                      <li style="margin-bottom:8px;">Connect with contacts</li>
                      <li style="margin-bottom:8px;">Start a real-time chat</li>
                      <li>Share messages instantly</li>
                    </ul>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding:20px 0;">
                    <a href="${clientURL}" 
                       style="background-color:#4f46e5; color:#ffffff; text-decoration:none; padding:14px 34px; font-size:15px; font-weight:600; border-radius:6px; display:inline-block;">
                      Open ChatSphere
                    </a>
                  </td>
                </tr>
              </table>

              <p style="font-size:14px; color:#6b7280; line-height:1.6;">
                If you need help or have questions, feel free to reach out.  
                We’re excited to have you with us!
              </p>

              <p style="font-size:14px; color:#111827; margin-bottom:0;">
                — The ChatSphere Team
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb; padding:20px; text-align:center;">
              <p style="margin:0; font-size:12px; color:#9ca3af;">
                © 2025 ChatSphere. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
