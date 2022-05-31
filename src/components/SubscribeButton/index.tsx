import styles from './subscribebutton.module.scss'

interface SubscribeButtonProps {
  priceId: string;
} 

export default function SubscribeButton({ priceId }:SubscribeButtonProps) {
  return (
    <button type="button" className={styles.subscribeButton}>
        Subscribe now
    </button>
  )
}
