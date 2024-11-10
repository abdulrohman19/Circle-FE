interface MyButtonProps {
    text: string
}

export function MyButton({text}: MyButtonProps) {
  return <button>{text}</button>;
}
