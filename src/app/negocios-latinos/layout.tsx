export default function NegociosLatinosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={
        {
          "--accent": "#16A34A",
          "--accent-hover": "#15803D",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
