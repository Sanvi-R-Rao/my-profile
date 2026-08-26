import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ fontSize: '4.5rem', color: 'var(--accent)', marginBottom: '8px' }}>404</h1>
      <h2 style={{ marginBottom: '16px' }}>Page Not Found</h2>
      <p style={{ color: 'var(--text)', marginBottom: '28px' }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;