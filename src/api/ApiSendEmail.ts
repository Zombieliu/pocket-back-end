import { ApiCall } from "tsrpc";
import * as nodemailer from 'nodemailer';
import {UserEmail} from "../entity/user_email";
import {getRepository} from "typeorm";
import {ReqSendEmail, ResSendEmail} from "../shared/protocols/PtlSendEmail";


const regEmail=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
const randomFns=()=> { // 生成6位随机数
    let code = '';
    for(let i= 0;i<6;i++){
        code += parseInt(String(Math.random() * 10));
    }
    return code;
};



// This is a demo code file
// Feel free to delete it

export default async function (call: ApiCall<ReqSendEmail, ResSendEmail>) {
    // Error
    let time = new Date();
    const email_check = regEmail.test(call.req.email);
    if (email_check){
        const code = randomFns();
        const transporter = nodemailer.createTransport({
            host: 'smtp.88.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'tansh@88.com', // generated ethereal user
                pass: 'kGNsvpWthCgNCrwu', // generated ethereal password
            },
        });
        const email = call.req.email
        const email_contont = `
<tbody>
<tr>
    <td width="100%">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tbody>
            <tr>
                <td>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px"
                           align="center">
                        <tbody>
                        <tr>
                            <td role="modules-container"
                                style="padding:0px 0px 0px 0px;color:#f0f0f0;text-align:left;background-color:#ffffff"
                                bgcolor="#000" width="100%" align="left">
                                <table class="m_6746742989523138337preheader" role="module" border="0" cellpadding="0"
                                       cellspacing="0" width="100%"
                                       style="display:none!important;opacity:0;color:transparent;height:0;width:0">
                                    <tbody>
                                    <tr>
                                        <td role="module-content">
                                            <p>Transforming a new
                                                generation of gameplay
                                                and digital content.</p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table class="m_6746742989523138337wrapper" role="module" border="0" cellpadding="0"
                                       cellspacing="0" width="100%" style="table-layout:fixed">
                                    <tbody>
                                    <tr>
                                        <td style="font-size:6px;line-height:10px;padding:0px" valign="top"
                                            align="center">
                                            <img class="m_6746742989523138337max-width" border="0"
                                                 style="background:black;display:block;color:#ffffff;text-decoration:none;font-family:&#39;Roboto&#39;,Helvetica,arial,sans-serif;font-size:16px;width:100%;height:auto!important"
                                                 src="https://aura-wallet.vercel.app/multichain.png"
                                                 alt="AuraWallet" width="300">
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table role="module" border="0" cellpadding="0" cellspacing="0" width="100%"
                                       style="table-layout:fixed">
                                    <tbody>
                                    <tr>
                                        <td style="background-color:#ffffff;padding:0px 0px 0px 0px;line-height:22px;text-align:left;border-bottom:3px solid #f0f0f0;max-width:600px"
                                            height="100%" valign="top" bgcolor="#FFFFFF">
                                            <div>
                                                <div style="margin-top:12px">
                                                    <div style="margin-top:24px;color:#1e1e1e;font-family:inherit;text-align:left">
                                                        <div style="margin-top:48px;color:#1e1e1e;font-family:inherit;text-align:left">
                                                            <div style="text-align:center">
                                                                <span style="color:#1e1e1e;font-size:32px;font-family:&#39;Roboto&#39;,Helvetica,arial,sans-serif"><strong>Welcome Login!</strong>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style="margin:24px 24px 0 24px;color:#1e1e1e;font-family:inherit;text-align:center">
                                                        <span style="font-family:&#39;Roboto&#39;,Helvetica,arial,sans-serif">
                                                        Use the verification code below to log in.
                                                        </span>
                                                    </div>
                                                </div>
                                                <div style="margin:60px 0 0 0;color:#1e1e1e;font-family:inherit;text-align:center">
                                                    <span style="padding:6px 48px;border:2px solid #e2e2e2;border-radius:6px;font-size:38px;font-weight:600;font-family:&#39;Roboto&#39;,Helvetica,arial,sans-serif">${code}</span>
                                                </div>
                                                <div style="margin-top:48px;border-top:2px solid #e2e2e2;color:#1e1e1e;font-family:inherit;text-align:center;width:100%;max-width:600px">
                                                    <div style="padding:36px 5%">
                                                        <span style="font-family:&#39;Roboto&#39;,Helvetica,arial,sans-serif">You received this email because you requested to log in to your Aura Wallet Account. If you didn&#39;t request to log in, you can safely ignore this e-mail.</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table role="module" border="0" cellpadding="0" cellspacing="0" width="100%"
                                       style="table-layout:fixed">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div style="padding:24px 0px 0px 24px;font-size:6px;line-height:10px;background-color:#191C25;text-align:left">
                                                <a role="social-icon-link"
                                                   href="https://aura-wallet.vercel.app/"
                                                   alt="AuraWallet" title="AuraWallet"
                                                   style="display:inline-block;background-color:#1e1e1e;height:auto;width:280px;border-radius:30px"
                                                   target="_blank"
                                                    <img role="social-icon" alt="AuraWallet" title="AuraWallet"
                                                         src="https://aura-wallet.vercel.app/logo.svg"
                                                         style="height:auto;width:280px"width="150">
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr style="padding:0;margin:0">
                                        <td>
                                            <table role="module" border="0" cellpadding="0" cellspacing="0" width="100%"
                                                   style="table-layout:fixed;background-color:#1e1e1e;margin:0;padding:0">
                                                <tbody>
                                                <tr>
                                                    <td style="vertical-align:center;text-align:left;width:30%">
                                                        <div style="display:inline-block;margin:0 24px">
                                                            <div style="margin:12px 0px 24px 0px;color:#ffffff;font-size:12px;text-align:left">
                                                                <span>2022 © Aura Wallet</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td style="vertical-align:center;text-align:right;width:70%">
                                                        <div style="display:inline-block;margin:0 24px 12px">
                                                          <div style="display:inline-block">
                                                            <a role="social-icon-link" href="https://medium.com/@tintin.land2021" alt="Medium" title="Medium" style="display:inline-block;background-color:#1e1e1e;height:24px;width:24px;border-radius:30px;padding:0 4px" target="_blank" >
                                                                <img role="social-icon" alt="Medium" title="Medium" src="https://web3games.oss-accelerate.aliyuncs.com/email/icon-medium.png" style="height:24px;width:24px" height="24" width="24">
                                                            </a>
                                                          </div>
                                                          <div style="display:inline-block">
                                                            <a role="social-icon-link" href="https://twitter.com/Tintinland2021" alt="Twitter" title="Twitter" style="display:inline-block;background-color:#1e1e1e;height:24px;width:24px;border-radius:30px;padding:0 4px" target="_blank" >
                                                                <img role="social-icon" alt="Twitter" title="Twitter" src="https://web3games.oss-accelerate.aliyuncs.com/email/icon-twitter.png" style="height:24px;width:24px" height="24" width="24">
                                                            </a>
                                                          </div>
                                                          <div style="display:inline-block">
                                                            <a role="social-icon-link" href="" alt="Telegram" title="Telegram" style="display:inline-block;background-color:#1e1e1e;height:24px;width:24px;border-radius:30px;padding:0 4px" target="_blank" >
                                                                <img role="social-icon" alt="Telegram" title="Telegram" src="https://web3games.oss-accelerate.aliyuncs.com/email/icon-telegram.png" style="height:24px;width:24px" height="24" width="24">
                                                            </a>
                                                          </div>
                                                          <div style="display:inline-block">
                                                            <a role="social-icon-link" href="https://discord.com/invite/6b2QNSYgmz" alt="Discord" title="Discord" style="display:inline-block;background-color:#1e1e1e;height:24px;width:24px;border-radius:24px;padding:0 4px" target="_blank">
                                                                <img role="social-icon" alt="Discord" title="Discord" src="https://web3games.oss-accelerate.aliyuncs.com/email/icon-discord.png" style="height:24px;width:24px" height="24" width="24">
                                                            </a>
                                                          </div>                                                                                        
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            </tbody>
        </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>`
        await transporter.sendMail({
                from: 'tansh@88.com', // 发件邮箱
                to: `${email}`, // 收件列表
                subject: `${code} is your verification code`, // 标题
                html: email_contont, // html 内容
            }
        );
        // Success
        const user = new UserEmail();
        user.email = `${email}`;
        user.code = `${code}`;
        try {
            await getRepository(UserEmail).insert(user);
        } catch (e) {
            await getRepository(UserEmail).save(user);
        }
        setTimeout(async ()=>{    //10分钟后失效
            await getRepository(UserEmail).remove(user);
        },1000*60)
        await call.succ({
            time: time
        });
    }else{
        await call.error('email is error');
        return;
    }
}
