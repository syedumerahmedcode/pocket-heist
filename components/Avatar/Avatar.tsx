import styles from "./Avatar.module.css"

interface AvatarProps {
  name: string
}

function getInitials(name: string): string {
  const capitals = name.match(/[A-Z]/g) ?? []
  if (capitals.length >= 2) return capitals[0] + capitals[1]
  return name.charAt(0).toUpperCase()
}

export default function Avatar({ name }: AvatarProps) {
  return (
    <div className={styles.avatar}>
      {getInitials(name)}
    </div>
  )
}
