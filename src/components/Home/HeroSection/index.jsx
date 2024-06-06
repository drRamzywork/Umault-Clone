import styles from './index.module.scss';

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.backgroundVideo}>
        <video playsInline loop muted autoPlay>
          <source src="https://videos.umault.com/Matomo-Googleheimer.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.content}>
        <h1>Welcome to Our Website</h1>
        <p>Your amazing content goes here.</p>
      </div>
    </div>
  );
};

export default HeroSection;

