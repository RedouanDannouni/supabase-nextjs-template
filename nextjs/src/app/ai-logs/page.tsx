'use client';
import { useEffect, useState } from 'react';

export default function AiLogsPage() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch('/api/ai/logs')
      .then((res) => res.json())
      .then((data) => setLogs(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">AI Logs</h1>
      <ul className="space-y-4">
        {logs.map((log: any, i) => (
          <li key={i} className="border p-4 rounded">
            <strong>Vraag:</strong> {log.question}
            <br />
            <strong>Antwoord:</strong> {log.response}
          </li>
        ))}
      </ul>
    </div>
  );
}
