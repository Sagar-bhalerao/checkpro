
import AnimatedCursor from 'react-animated-cursor';

const CursorAnimation = () => {
  return (
    <div className="cursor-container">
    <AnimatedCursor
      innerSize={8}
      outerSize={32}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      innerStyle={{ backgroundColor: '#44BBA2', }}
      outerStyle={{ border: '1px solid #44BBA2', }}
      showSystemCursor={true}
    />

    </div>
  )
}

export default CursorAnimation;
