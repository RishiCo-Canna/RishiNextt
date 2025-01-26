export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>404</h1>
        <p style={{ marginTop: '0.5rem', color: '#666' }}>Page not found</p>
      </div>
    </div>
  );
}