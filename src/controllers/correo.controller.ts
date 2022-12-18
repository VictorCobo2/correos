import { Request, Response } from "express";
import nodemailer from "nodemailer";

export const enviarCorreo = async (req: Request, res: Response) => {
  try {
    const { name, email, placa, phone } = req.body;

    const config = {
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "soatseguro2023@gmail.com",
        pass: "egdtbpgfbfifpoek",
      },
    };

    const msghtml = `<!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
        <meta charset="utf-8"> <!-- utf-8 works for most cases -->
        <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
        <meta name="x-apple-disable-message-reformatting"> <!-- Disable auto-scale in iOS 10 Mail entirely -->
        <title>Bienvenido - Premios india Catalina 2023</title>
        <!-- The title tag shows in email notifications, like Android 4.4. -->
        <style>
            html,
            body {
                margin: 0 auto !important;
                padding: 0 !important;
                height: 100% !important;
                width: 100% !important;
            }
    
            /* What it does: Stops email clients resizing small text. */
            * {
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
            }
    
            /* What it does: Centers email on Android 4.4 */
            div[style*="margin: 16px 0"] {
                margin: 0 !important;
            }
    
            /* What it does: Stops Outlook from adding extra spacing to tables. */
            table,
            td {
                mso-table-lspace: 0pt !important;
                mso-table-rspace: 0pt !important;
            }
    
            /* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */
            table {
                border-spacing: 0 !important;
                border-collapse: collapse !important;
                table-layout: fixed !important;
                margin: 0 auto !important;
            }
    
            table table table {
                table-layout: auto;
            }
    
            /* What it does: Uses a better rendering method when resizing images in IE. */
            img {
                -ms-interpolation-mode: bicubic;
            }
    
            /* What it does: A work-around for email clients meddling in triggered links. */
            *[x-apple-data-detectors],
            /* iOS */
            .x-gmail-data-detectors,
            /* Gmail */
            .x-gmail-data-detectors *,
            .aBn {
                border-bottom: 0 !important;
                cursor: default !important;
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
            }
    
            /* What it does: Prevents Gmail from displaying an download button on large, non-linked images. */
            .a6S {
                display: none !important;
                opacity: 0.01 !important;
            }
    
            /* If the above doesn't work, add a .g-img class to any image in question. */
            img.g-img+div {
                display: none !important;
            }
    
            /* What it does: Prevents underlining the button text in Windows 10 */
            .button-link {
                text-decoration: none !important;
            }
    
            /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
            /* Create one of these media queries for each additional viewport size you'd like to fix */
            /* Thanks to Eric Lepetit @ericlepetitsf) for help troubleshooting */
            @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
    
                /* iPhone 6 and 6+ */
                .email-container {
                    min-width: 375px !important;
                }
            }
        </style>
    
        <style>
            /* What it does: Hover styles for buttons */
            .button-td,
            .button-a {
                transition: all 100ms ease-in;
            }
    
            .button-td:hover,
            .button-a:hover {
                background: #f1f1f1 !important;
                border-color: #f1f1f1 !important;
            }
    
            /* Media Queries */
            @media screen and (max-width: 480px) {
    
                /* What it does: Forces elements to resize to the full width of their container. Useful for resizing images beyond their max-width. */
                .fluid {
                    width: 100% !important;
                    max-width: 100% !important;
                    height: auto !important;
                    margin-left: auto !important;
                    margin-right: auto !important;
                }
    
                /* What it does: Forces table cells into full-width rows. */
                .stack-column,
                .stack-column-center {
                    display: block !important;
                    width: 100% !important;
                    max-width: 100% !important;
                    direction: ltr !important;
                }
    
                /* And center justify these ones. */
                .stack-column-center {
                    text-align: center !important;
                }
    
                /* What it does: Generic utility class for centering. Useful for images, buttons, and nested tables. */
                .center-on-narrow {
                    text-align: center !important;
                    display: block !important;
                    margin-left: auto !important;
                    margin-right: auto !important;
                    float: none !important;
                }
    
                table.center-on-narrow {
                    display: inline-block !important;
                }
    
                /* What it does: Adjust typography on small screens to improve readability */
                .email-container p {
                    font-size: 17px !important;
                    line-height: 22px !important;
                }
            }
        </style>
    </head>
    
    <body width="100%" bgcolor="#F1F1F1" style="margin: 0; mso-line-height-rule: exactly;">
        <center style="width: 100%; background: #F1F1F1; text-align: left;">
            <div style="max-width: 680px; margin: auto;" class="email-container">
    
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%"
                    style="max-width: 680px;" class="email-container">
                    <tr>
                        <td bgcolor="#ffffff">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="padding: 30px 40px 30px 40px; text-align: center;">
                                        <img src=https://i.postimg.cc/sgwBGtNm/Whats-App-Image-2022-12-11-at-4-44-34-PM.jpg  style="width: 300px; max-width: 600px; height: auto; margin: auto; display: block;">
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td background="background.png" bgcolor="#ffffff" align="center" valign="top"
                            style="text-align: center; background-position: center center !important; background-size: cover !important;">
                            <div>
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center"
                                    width="100%" style="max-width:500px; margin: auto;">
    
                                    <tr>
                                        <td height="20" style="font-size:20px; line-height:20px;">&nbsp;</td>
                                    </tr>
    
                                    <tr>
                                        <td align="center" valign="middle">
    
                                            <table>
                                                <tr>
                                                    <td valign="top" style="text-align: center; padding: 60px 0 10px 20px;">
    
                                                        <h1
                                                            style="margin: 0; font-family: 'Montserrat', sans-serif; font-size: 30px; line-height: 36px; color: '#00000'; font-weight: bold;">
                                                            Datos de Contacto</h1>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td valign="top"
                                                        style="text-align: center; padding: 10px 20px 15px 20px; font-family: sans-serif; font-size: 18px; line-height: 20px; color: '#00000';">
                                                        <table>
															<tr>
																<td>
																	<div class="text" style="padding: 0 2.5em; text-align: center;">
																		<h3>Nombre: ${name}</h3>
																		<h3>Correo: ${email}</h3>
																		<h3>Telefono: ${phone}</h3>
																		<h3>Placa: ${placa}</h3>
																	</div>
																</td>
															</tr>
														</table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td valign="top" align="center"
                                                        style="text-align: center; padding: 15px 0px 60px 0px;">
    
                                                        <center>
                                                            <table role="presentation" align="center" cellspacing="0"
                                                                cellpadding="0" border="0" class="center-on-narrow"
                                                                style="text-align: center;">
                                                               
                                                            </table>
                                                        </center>
    
    
                                                    </td>
                                                </tr>
                                            </table>
    
                                        </td>
                                    </tr>
    
                                    <tr>
                                        <td height="20" style="font-size:20px; line-height:20px;">&nbsp;</td>
                                    </tr>
    
                                </table>
    
                            </div>
    
                        </td>
                    </tr>
    
    
                    <tr>
                        <td bgcolor="#ffffff">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td
                                        style="padding: 40px 40px 10px 40px; font-family: sans-serif; font-size: 12px; line-height: 18px; color: #666666; text-align: center; font-weight:normal;">
                                        <p style="margin: 0;">Soat Company Seguros ®</p>
                                    </td>
                                </tr>
    
    
                            </table>
                        </td>
                    </tr>
    
    
                </table>
    
            </div>
    
        </center>
    </body>
    
    </html>`;

    const msg = {
      from: "soatseguro2023@gmail.com",
      to: "Soatseguro2023@gmail.com",
      subject: "Nuevos datos de contacto",
      html: msghtml,
      text: "Datos",
    };

    const trasnport = nodemailer.createTransport(config);

    const info = await trasnport.sendMail(msg);

    res.json(info);
  } catch (error) {
    console.log(error);

    res.json({ msg: error });
  }
};
