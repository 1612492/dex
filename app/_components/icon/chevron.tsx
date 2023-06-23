type Direction = 'up' | 'right' | 'down' | 'left';

type IconProps = {
  direction?: Direction;
};

const styles = {
  up: undefined,
  right: { transform: 'rotate(90deg)' },
  down: { transform: 'rotate(180deg)' },
  left: { transform: 'rotate(270deg)' },
};

export default function Icon({ direction = 'up' }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      style={styles[direction]}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15 12.353-5-4.706-5 4.706"
      />
    </svg>
  );
}
