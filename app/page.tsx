import client from "../tina/__generated__/client";
import Link from "next/link"

export default async function Home() {
  const globalData = await client.queries.global({
    relativePath: "index.json",
  });

  return (
    <main className="main">
      <div className="container">
        <div className="content">
          <h1 className="title">{globalData.data.header.name}</h1>
          <div style={{ marginTop: '1rem' }}>
            <a 
              href="/admin" 
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#0070f3',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                display: 'inline-block'
              }}
            >
              Open Admin Panel
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}