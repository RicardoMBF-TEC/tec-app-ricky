interface RectangleProps {
    color: string;
  }
  
  export default function Rectangle({ color }: RectangleProps) {
    // Map color to a valid Tailwind background class
    const colorClasses: { [key: string]: string } = {
      red: 'bg-red-500',
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      yellow: 'bg-yellow-500',
      black: 'bg-black-500',
      white: 'bg-white-500'
      // Add more colors as needed
    };
  
    // Use the color prop to get the appropriate Tailwind class, fallback to red if the color is unknown
    const backgroundColorClass = colorClasses[color] || 'bg-red-500';
  
    return <div className={`w-64 h-32 ${backgroundColorClass}`}></div>;
  }