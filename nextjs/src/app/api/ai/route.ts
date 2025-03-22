// nextjs/src/app/api/ai/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const userMessage = body.message;

  const apiKey = process.env.OPENAI_API_KEY;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo', // gebruik GPT-4 als je wil
      messages: [{ role: 'user', content: userMessage }],
    }),
  });

  const data = await response.json();
  const aiMessage = data.choices?.[0]?.message?.content;

  return NextResponse.json({ reply: aiMessage });
}
