/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  try {
    const name = e.record.get("name");
    const email = e.record.get("email");
    const phone = e.record.get("phone");
    const subject = e.record.get("subject");
    const message = e.record.get("message");
    
    const adminMailMessage = new MailerMessage({
      from: {
        address: $app.settings().meta.senderAddress,
        name: $app.settings().meta.senderName
      },
      to: [{ address: "kaveritech2022@gmail.com" }],
      subject: "New Contact Form Submission: " + subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name || 'N/A'}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email || 'N/A'}</a></p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject || 'N/A'}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <p style="background-color: #fff; padding: 15px; border-left: 4px solid #007bff; line-height: 1.6;">
              ${message || 'No message provided'}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>Submission ID: ${e.record.id}</p>
            <p>Submitted at: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    });
    
    $app.newMailClient().send(adminMailMessage);
  } catch (err) {
    console.error("Error sending admin notification email:", err);
  }
  
  e.next();
}, "contact_submissions");