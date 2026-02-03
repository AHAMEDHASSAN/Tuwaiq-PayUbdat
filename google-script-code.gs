function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    
    var now = new Date();
    var timeStr = Utilities.formatDate(now, Session.getScriptTimeZone(), "hh:mm a");
    var dateStr = Utilities.formatDate(now, Session.getScriptTimeZone(), "yyyy-MM-dd");

    // 1. Save data to Google Sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      data.fullName || "N/A",
      data.phone || "N/A",
      data.subject || "N/A",
      data.message || "N/A",
      timeStr,
      dateStr
    ]);

    var spreadsheetUrl = SpreadsheetApp.getActiveSpreadsheet().getUrl();
    var myEmail = "ahmedhassan28111999iti@gmail.com";
    var emailSubject = "رسالة جديدة من عميل - Tuwaiq Pay"; // Removed emojis to avoid question marks

    // تصميم Premium مع Inline Styles لضمان الظهور في Gmail بشكل مثالي
    var htmlBody = `
    <div style="background-color: #f0f4f8; padding: 40px 10px; font-family: 'Segoe UI', Arial, sans-serif; direction: rtl;" dir="rtl">
        <center>
            <div style="max-width: 600px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 1px solid #e1e8ef;">
                
                <!-- Header Gradient -->
                <div style="background: linear-gradient(135deg, #0f172a 0%, #1e40af 100%); padding: 40px 20px; text-align: center;">
                    <div style="display: inline-block; background: rgba(255,255,255,0.15); padding: 5px 15px; border-radius: 50px; color: #ffffff; font-size: 13px; margin-bottom: 15px; border: 1px solid rgba(255,255,255,0.2);">
                        إشعار جديد
                    </div>
                    <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 1px; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">Tuwaiq Pay</h1>
                </div>

                <div style="padding: 40px;">
                    <h2 style="color: #1e293b; font-size: 20px; margin-bottom: 30px; border-right: 4px solid #3b82f6; padding-right: 15px;">بيانات نموذج التواصل</h2>

                    <!-- Row: Name -->
                    <div style="margin-bottom: 25px; padding: 15px; background: #f8fafc; border-radius: 12px; border: 1px solid #edf2f7;">
                        <span style="color: #64748b; font-size: 12px; font-weight: 700; display: block; margin-bottom: 5px; text-transform: uppercase;">اسم العميل</span>
                        <span style="color: #1e293b; font-size: 17px; font-weight: 600;">${data.fullName || "غير محدد"}</span>
                    </div>

                    <!-- Row: Phone -->
                    <div style="margin-bottom: 25px; padding: 15px; background: #f8fafc; border-radius: 12px; border: 1px solid #edf2f7;">
                        <span style="color: #64748b; font-size: 12px; font-weight: 700; display: block; margin-bottom: 5px; text-transform: uppercase;">رقم الواتساب / الهاتف</span>
                        <span style="color: #1e293b; font-size: 17px; font-weight: 600; direction: ltr; display: inline-block;">${data.phone || "غير محدد"}</span>
                    </div>

                    <!-- Row: Subject -->
                    <div style="margin-bottom: 25px; padding: 15px; background: #f8fafc; border-radius: 12px; border: 1px solid #edf2f7;">
                        <span style="color: #64748b; font-size: 12px; font-weight: 700; display: block; margin-bottom: 5px; text-transform: uppercase;">الغرض من التواصل</span>
                        <span style="color: #1e293b; font-size: 17px; font-weight: 600;">${data.subject || "بدون موضوع"}</span>
                    </div>

                    <!-- Message Box -->
                    <div style="margin-top: 30px; padding: 25px; background: #ffffff; border: 2px dashed #e2e8f0; border-radius: 15px;">
                        <span style="color: #3b82f6; font-size: 14px; font-weight: 700; display: block; margin-bottom: 15px;">نص الرسالة الواردة:</span>
                        <p style="color: #334155; line-height: 1.8; font-size: 16px; margin: 0; white-space: pre-wrap;">${data.message || "لا توجد تفاصيل إضافية"}</p>
                    </div>

                    <!-- Open Spreadsheet Button -->
                    <div style="margin-top: 40px; text-align: center;">
                        <a href="${spreadsheetUrl}" style="background-color: #2563eb; color: #ffffff; padding: 15px 30px; text-decoration: none; border-radius: 12px; font-weight: 600; font-size: 16px; display: inline-block; box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);">
                            فتح ملف البيانات (Google Sheets)
                        </a>
                    </div>
                </div>

                <!-- Footer -->
                <div style="padding: 30px; background-color: #fcfcfc; text-align: center; border-top: 1px solid #f1f5f9;">
                    <p style="color: #94a3b8; font-size: 12px; margin: 0;">📅 تاريخ الإرسال: ${dateStr} | ⏰ الوقت: ${timeStr}</p>
                    <div style="margin: 20px 0; height: 1px; background: #f1f5f9;"></div>
                    <p style="color: #cbd5e1; font-size: 11px; margin: 0;">هذه الرسالة تم إنشاؤها عبر نظام Tuwaiq Pay الإلكتروني.</p>
                </div>
            </div>
        </center>
    </div>
    `;

    GmailApp.sendEmail(myEmail, emailSubject, "رسالة جديدة", {
      htmlBody: htmlBody
    });

    return ContentService.createTextOutput(JSON.stringify({result: "success"})).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({result: "error", error: error.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}
