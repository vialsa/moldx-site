import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Tem de ser exatamente "export async function POST"
export async function POST(request) {
  try {
    const { nome, email, mensagem } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'moldxenterprise@gmail.com',
        pass: 'vzve zesu uexs cfof', // Substitua pela sua senha de 16 letras
      },
    });

    const mailOptions = {
      from: 'moldxenterprise@gmail.com',
      to: 'moldxenterprise@gmail.com',
      replyTo: email,
      subject: `Novo Contato do Site: ${nome}`,
      text: `Nome/Empresa: ${nome}\nE-mail do Cliente: ${email}\n\nMensagem do Projeto:\n${mensagem}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email enviado com sucesso!' }, { status: 200 });
  } catch (error) {
    console.error("Erro no Nodemailer:", error);
    return NextResponse.json({ error: 'Erro ao enviar o email' }, { status: 500 });
  }
}