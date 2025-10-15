export default function PatternComponent({ children }:{children:any}) {
    return (
        <div
        className="w-full h-screen flex items-center justify-center bg-repeat"
        style={{
            backgroundImage: `url(Login/BG.png)`,
            backgroundColor: "#3335750D",
        }}
        >
        {children}
        </div>
    )
}