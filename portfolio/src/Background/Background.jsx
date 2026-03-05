import './Background.css'
function Background() {
const DOT_COUNT = 60;
  return (
    <>
 <div className="dots-container">
      {Array.from({ length: DOT_COUNT }).map((_, i) => (
        <span
          key={i}
          className="dot"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${20 + Math.random() * 30}s`,
            animationDelay: `${Math.random() * -40}s`,
            opacity: 0.2 + Math.random() * 0.5,
            transform: `scale(${0.5 + Math.random()})`
          }}
        />
      ))}
    </div>
  
    </>
  )
}

export default Background