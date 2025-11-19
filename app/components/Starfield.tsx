export default function Starfield() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Simple star effect - we'll enhance later */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-1/3 left-2/3 w-1 h-1 bg-white rounded-full opacity-50"></div>
      <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-white rounded-full opacity-40 animate-pulse"></div>
    </div>
  )
}
