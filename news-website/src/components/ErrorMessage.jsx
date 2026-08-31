function ErrorMessage({ message, onRetry }) {
  return (
    <section className="error-card" role="alert">
      <h2>Something went wrong</h2>
      <p>{message}</p>
      <button type="button" onClick={onRetry}>
        Try Again
      </button>
    </section>
  )
}

export default ErrorMessage
