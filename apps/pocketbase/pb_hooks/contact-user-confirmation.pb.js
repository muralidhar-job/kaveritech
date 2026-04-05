/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  try {
    const userEmail = e.record.get("email");
    const name = e.record.get("name");
    
    if (!userEmail) {
      console.warn("No email address provided for user confirmation");
      e.next();
      return;
    }
    
    const userMailMessage = new MailerMessage({
      from: {
        address: $app.settings().meta.senderAddress,
        name: $app.settings().meta.senderName
      },
      to: [{ address: userEmail }],
      subject: "We Received Your Message",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #28a745; padding-bottom: 10px;">Thank You for Contacting Us</h2>
          
          <p style="font-size: 16px; color: #555; line-height: 1.6;">
            Dear ${name || 'Valued Customer'},
          </p>
          
          <p style="font-size: 16px; color: #555; line-height: 1.6;">
            We have successfully received your message and appreciate you taking the time to reach out to us. 
            Our team will review your submission and get back to you as soon as possible.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Submission Details:</h3>
            <p style="margin: 10px 0;"><strong>Reference ID:</strong> ${e.record.id}</p>
            <p style="margin: 10px 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <p style="font-size: 16px; color: #555; line-height: 1.6;">
            If you have any urgent matters, please feel free to contact us directly. We look forward to assisting you.
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px;">
              Best regards,<br>
              <strong>Our Support Team</strong>
            </p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f0f0f0; border-radius: 5px; font-size: 12px; color: #666;">
            <p style="margin: 5px 0;">This is an automated confirmation email. Please do not reply to this message.</p>
          </div>
        </div>
      `
    });
    
    $app.newMailClient().send(userMailMessage);
  } catch (err) {
    console.error("Error sending user confirmation email:", err);
  }
  
  e.next();
}, "contact_submissions");