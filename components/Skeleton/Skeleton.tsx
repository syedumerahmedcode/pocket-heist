import styles from "./Skeleton.module.css"

export default function Skeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar}></div>
        <div className={styles.headerLines}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </div>
  )
}
