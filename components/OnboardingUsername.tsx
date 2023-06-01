import { useState } from 'react';
import styles from '../styles/OnboardingUsername.module.css';
import Icon, { Icons } from './Icon';

export default function OnboardingUsername() {
  const [username, setUsername] = useState('');
  return (
    <div className={styles.OnboardingUsernameContainer}>
      <h1>Let's find a username for you.</h1>
      <h2>This is how others will identify you on the platform</h2>
      <h3>2. Create you username</h3>
      <div className={styles.InputContainer}>
        <input className={'bg-mediumGrey'} type="text" value={username} onChange={e => setUsername(e.target.value)} />
        <Icon className={styles.Avatar} icon={Icons['SPARKLE_KAPI']} />
      </div>
      <ul className={styles.UsernameRequirements}>
        <li>Minimum 5 characters (numbers allowed)</li>
        <li>Avoid Special Characters !@#$%</li>
        <li>No Profanity or offensive language/words</li>
      </ul>
    </div>
  );
}
