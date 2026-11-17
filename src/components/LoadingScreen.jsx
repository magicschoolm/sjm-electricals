function LoadingScreen() {
  return (
    <main className="loading-screen" aria-label="Loading SJM Electricals">
      <div className="loading-mark" aria-hidden="true">
        <span className="mark-line mark-line-one" />
        <span className="mark-line mark-line-two" />
      </div>
      <div className="name-lockup">
        <span className="name-first">jerrin</span>
        <span className="name-second">mathew</span>
      </div>
      <span className="loading-caption">powering up</span>
    </main>
  )
}

export default LoadingScreen
