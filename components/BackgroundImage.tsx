export default function BackgroundImage() {
  return (
    <div
      className="inset-0 w-full h-full"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, #DDF9AB 0%, #DED884 50%, #E5DFAF 100%)',
        zIndex: 0,
      }}
    />
  )
}

