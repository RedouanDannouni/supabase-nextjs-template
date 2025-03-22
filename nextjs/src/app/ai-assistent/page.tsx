'use client';

import { useState } from 'react';

export default function AiAssistentPage() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResponse('');

    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setResponse(data.reply);
    setLoading(false);
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Assistent</h1>

      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Stel een vraag..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? 'Bezig...' : 'Verstuur'}
        </button>
      </form>

      {response && (
        <div className="bg-gray-100 p-4 rounded shadow">
          <strong>Antwoord van AI:</strong>
          <p className="mt-2 whitespace-pre-line">{response}</p>
        </div>
      )}
    </div>
  );
}
