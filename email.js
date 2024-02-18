export const createEmail = (name, email, phone, message) => {
  return `
    <html>
      <head>
      </head>
      <body>
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="font-family: Arial, sans-serif;">
      <tr>
        <td align="center" bgcolor="#002c69" style="padding: 20px; color: #ffffff;">
          <h1>PC APPS</h1>
          <h3 style="font-style: italic;">¡Un nuevo usuario quieren contactarse con usted!</h3>
        </td>
      </tr>
      <tr>
        <td bgcolor="#f9f9f9" style="padding: 20px;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="font-family: Arial, sans-serif;">
            <tr>
              <td valign="top" style="padding-bottom: 10px;"><strong>Nombre:</strong></td>
              <td valign="top" style="padding-bottom: 10px; padding-left: 10px;">${name}</td>
            </tr>
            <tr>
              <td valign="top" style="padding-bottom: 10px;"><strong>Email:</strong></td>
              <td valign="top" style="padding-bottom: 10px; padding-left: 10px;">${email}</td>
            </tr>
            <tr>
              <td valign="top" style="padding-bottom: 10px;"><strong>Teléfono:</strong></td>
              <td valign="top" style="padding-bottom: 10px; padding-left: 10px;">${phone}</td>
            </tr>
            <tr>
              <td valign="top" style="padding-bottom: 20px;"><strong>Mensaje:</strong></td>
              <td valign="top" style="text-align: justify; padding-left: 10px;">${message}</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
      </body>
    </html>
    
    `;
};
