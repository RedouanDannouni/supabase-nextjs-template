'use client';

import { useEffect, useState } from 'react';

// ✅ Type definities
type AiLog = {
  id: string;
  question: string;
  response: string;
  created_at?: string; // als je dat ook ophaalt vanuit Supabase
};

export default function AiLogsPage() {
  const [logs, setLogs] = useState<AiLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/ai/logs')
      .then((res) => res.json())
      .then((data: AiLog[]) => {
        setLogs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Fout bij ophalen logs:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Logs</h1>

      {loading ? (
        <p>Bezig met laden...</p>
      ) : logs.length === 0 ? (
        <p>Er zijn nog geen logs gevonden.</p>
      ) : (
        <ul className="space-y-4">
          {logs.map((log) => (
            <li key={log.id} className="border p-4 rounded bg-white shadow-sm">
              <div className="mb-2 text-sm text-gray-500">
                {log.created_at && new Date(log.created_at).toLocaleString()}
              </div>
              <p><strong>Vraag:</strong> {log.question}</p>
              <p><strong>Antwoord:</strong> {log.response}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
