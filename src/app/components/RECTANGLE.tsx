interface RectangleProps {
  color: string;
}

export default function Rectangle({ color }: RectangleProps) {
  return (
    <div
      style={{
        backgroundColor: color, //Aplica color directamente
        width: '8rem', // equivale a w32 en Tailwind
        height: '8rem', // equivale a h-32 en Tailwind
      }}
    />
  );
}

