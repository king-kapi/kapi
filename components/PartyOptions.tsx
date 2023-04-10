import styles from '../styles/PartyOptions.module.css';
import { Icon } from '@iconify/react';

export default function PartyOptions() {
  return (
    <div className={styles.PartyOptionsContainer}>
      <h1 className={styles.Header}>1. What are you looking for?</h1>
      <div className={styles.ButtonsContainer}>
        <button className={styles.PartyOption}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="94"
            height="74"
            viewBox="0 0 94 74"
            fill="none"
            className={styles.PartyOptionIcon}
          >
            <path
              d="M29.0311 35.6296C33.7975 35.6296 38.3687 33.7527 41.739 30.4118C45.1093 27.0709 47.0028 22.5396 47.0028 17.8148C47.0028 13.09 45.1093 8.55876 41.739 5.21784C38.3687 1.87691 33.7975 0 29.0311 0C24.2647 0 19.6936 1.87691 16.3232 5.21784C12.9529 8.55876 11.0595 13.09 11.0595 17.8148C11.0595 22.5396 12.9529 27.0709 16.3232 30.4118C19.6936 33.7527 24.2647 35.6296 29.0311 35.6296ZM60.4787 63.8319C63.4095 65.0213 67.1365 65.7778 71.8811 65.7778C94 65.7778 94 49.3333 94 49.3333C94 47.1536 93.1269 45.0631 91.5725 43.5213C90.0182 41.9795 87.9098 41.1126 85.7109 41.1111H60.1193C62.2925 43.7203 63.5975 47.0585 63.5975 50.7037V52.6551C63.5862 53.1167 63.5548 53.5775 63.5035 54.0364C63.1304 57.4613 62.1004 60.7851 60.4787 63.8319ZM85.7109 21.9259C85.7109 25.5604 84.2544 29.046 81.6619 31.6159C79.0693 34.1859 75.553 35.6296 71.8866 35.6296C68.2201 35.6296 64.7039 34.1859 62.1113 31.6159C59.5187 29.046 58.0622 25.5604 58.0622 21.9259C58.0622 18.2915 59.5187 14.8059 62.1113 12.2359C64.7039 9.666 68.2201 8.22222 71.8866 8.22222C75.553 8.22222 79.0693 9.666 81.6619 12.2359C84.2544 14.8059 85.7109 18.2915 85.7109 21.9259ZM0 52.0741C0 49.1665 1.16519 46.378 3.23924 44.3221C5.3133 42.2661 8.12632 41.1111 11.0595 41.1111H47.0028C49.9359 41.1111 52.7489 42.2661 54.823 44.3221C56.897 46.378 58.0622 49.1665 58.0622 52.0741C58.0622 52.0741 58.0622 74 29.0311 74C0 74 0 52.0741 0 52.0741ZM63.592 52.6551L63.5754 53.0059L63.5864 52.6551H63.592Z"
              fill="#D9D9D9"
            />
          </svg>
          <span className={styles.PartyOptionName}>Find a buddy</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="25"
            viewBox="0 0 15 25"
            fill="none"
            className={styles.PartyOptionArrow}
          >
            <path
              d="M2.83784 24.5L0 21.7L9.32433 12.5L0 3.3L2.83784 0.5L15 12.5L2.83784 24.5Z"
              fill="white"
            />
          </svg>
        </button>
        <button className={styles.PartyOption}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="93"
            viewBox="0 0 100 93"
            fill="none"
            className={styles.PartyOptionIcon}
          >
            <path
              d="M50 28.6154C53.7888 28.6154 57.4224 27.108 60.1015 24.4248C62.7806 21.7415 64.2857 18.1023 64.2857 14.3077C64.2857 10.5131 62.7806 6.87384 60.1015 4.19063C57.4224 1.50741 53.7888 0 50 0C46.2112 0 42.5776 1.50741 39.8985 4.19063C37.2194 6.87384 35.7143 10.5131 35.7143 14.3077C35.7143 18.1023 37.2194 21.7415 39.8985 24.4248C42.5776 27.108 46.2112 28.6154 50 28.6154ZM28.5714 16.0962C28.5714 17.7402 28.2481 19.3682 27.6199 20.8871C26.9917 22.406 26.071 23.7861 24.9103 24.9486C23.7495 26.1111 22.3715 27.0333 20.855 27.6624C19.3384 28.2916 17.713 28.6154 16.0714 28.6154C14.4299 28.6154 12.8045 28.2916 11.2879 27.6624C9.77132 27.0333 8.39333 26.1111 7.2326 24.9486C6.07186 23.7861 5.15112 22.406 4.52293 20.8871C3.89475 19.3682 3.57143 17.7402 3.57143 16.0962C3.57143 12.7758 4.88839 9.59153 7.2326 7.24372C9.5768 4.89591 12.7562 3.57692 16.0714 3.57692C19.3866 3.57692 22.5661 4.89591 24.9103 7.24372C27.2545 9.59153 28.5714 12.7758 28.5714 16.0962ZM96.4286 16.0962C96.4286 17.7402 96.1052 19.3682 95.4771 20.8871C94.8489 22.406 93.9281 23.7861 92.7674 24.9486C91.6067 26.1111 90.2287 27.0333 88.7121 27.6624C87.1955 28.2916 85.5701 28.6154 83.9286 28.6154C82.287 28.6154 80.6616 28.2916 79.145 27.6624C77.6285 27.0333 76.2505 26.1111 75.0897 24.9486C73.929 23.7861 73.0083 22.406 72.3801 20.8871C71.7519 19.3682 71.4286 17.7402 71.4286 16.0962C71.4286 12.7758 72.7455 9.59153 75.0897 7.24372C77.4339 4.89591 80.6134 3.57692 83.9286 3.57692C87.2438 3.57692 90.4232 4.89591 92.7674 7.24372C95.1116 9.59153 96.4286 12.7758 96.4286 16.0962ZM26.3464 35.7692C24.3141 38.3047 23.2089 41.4601 23.2143 44.7115V71.5385C23.2143 75.956 24.2786 80.1231 26.1679 83.7966C23.446 85.23 20.4006 85.9351 17.3267 85.8436C14.2528 85.7521 11.2546 84.8671 8.62252 83.2744C5.99042 81.6816 3.81363 79.435 2.30299 76.7523C0.792356 74.0695 -0.000920401 71.0415 8.01403e-07 67.9615V44.7115C8.01403e-07 42.3399 0.940687 40.0654 2.61512 38.3884C4.28955 36.7114 6.56057 35.7692 8.92857 35.7692H26.3464ZM73.8321 83.7966C75.7793 80.0052 76.7921 75.802 76.7857 71.5385V44.7115C76.7857 41.3278 75.6143 38.2194 73.6536 35.7692H91.0714C93.4394 35.7692 95.7104 36.7114 97.3849 38.3884C99.0593 40.0654 100 42.3399 100 44.7115V67.9615C100.001 71.0415 99.2076 74.0695 97.697 76.7523C96.1864 79.435 94.0096 81.6816 91.3775 83.2744C88.7454 84.8671 85.7472 85.7521 82.6733 85.8436C79.5994 85.9351 76.554 85.23 73.8321 83.7966ZM37.5 35.7692C35.132 35.7692 32.861 36.7114 31.1865 38.3884C29.5121 40.0654 28.5714 42.3399 28.5714 44.7115V71.5385C28.5714 77.2304 30.8291 82.6892 34.8477 86.7141C38.8663 90.7389 44.3168 93 50 93C55.6832 93 61.1337 90.7389 65.1523 86.7141C69.1709 82.6892 71.4286 77.2304 71.4286 71.5385V44.7115C71.4286 42.3399 70.4879 40.0654 68.8135 38.3884C67.139 36.7114 64.868 35.7692 62.5 35.7692H37.5Z"
              fill="#D9D9D9"
            />
          </svg>
          <span className={styles.PartyOptionName}>Find a Party</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="25"
            viewBox="0 0 15 25"
            fill="none"
            className={styles.PartyOptionArrow}
          >
            <path
              d="M2.83784 24.5L0 21.7L9.32433 12.5L0 3.3L2.83784 0.5L15 12.5L2.83784 24.5Z"
              fill="white"
            />
          </svg>
        </button>
        <button className={styles.PartyOption}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="76"
            height="111"
            viewBox="0 0 76 111"
            fill="none"
            className={styles.PartyOptionIcon}
          >
            <path
              d="M38 73C32.775 73 28.3021 71.1396 24.5813 67.4187C20.8604 63.6979 19 59.225 19 54C19 48.775 20.8604 44.3021 24.5813 40.5813C28.3021 36.8604 32.775 35 38 35C43.225 35 47.6979 36.8604 51.4187 40.5813C55.1396 44.3021 57 48.775 57 54C57 59.225 55.1396 63.6979 51.4187 67.4187C47.6979 71.1396 43.225 73 38 73ZM0 111V97.7C0 95.0083 0.693501 92.5336 2.0805 90.2758C3.46433 88.0211 5.30417 86.3 7.6 85.1125C12.5083 82.6583 17.4958 80.8169 22.5625 79.5883C27.6292 78.3628 32.775 77.75 38 77.75C43.225 77.75 48.3708 78.3628 53.4375 79.5883C58.5042 80.8169 63.4917 82.6583 68.4 85.1125C70.6958 86.3 72.5357 88.0211 73.9195 90.2758C75.3065 92.5336 76 95.0083 76 97.7V111H0Z"
              fill="#D9D9D9"
            />
            <mask
              id="mask0_1187_10056"
              maskUnits="userSpaceOnUse"
              x="20"
              y="0"
              width="35"
              height="29"
            >
              <path
                d="M25.875 26.8L22 8.975L29.75 12.85L37.5 2L45.25 12.85L53 8.975L49.125 26.8H25.875Z"
                fill="white"
                stroke="white"
                stroke-width="4"
                stroke-linejoin="round"
              />
              <path
                d="M37.4999 21.3748C38.3221 21.3748 39.1106 21.0482 39.6919 20.4668C40.2733 19.8855 40.5999 19.097 40.5999 18.2748C40.5999 17.4526 40.2733 16.6641 39.6919 16.0828C39.1106 15.5014 38.3221 15.1748 37.4999 15.1748C36.6777 15.1748 35.8892 15.5014 35.3079 16.0828C34.7265 16.6641 34.3999 17.4526 34.3999 18.2748C34.3999 19.097 34.7265 19.8855 35.3079 20.4668C35.8892 21.0482 36.6777 21.3748 37.4999 21.3748Z"
                fill="black"
                stroke="black"
                stroke-width="4"
                stroke-linejoin="round"
              />
            </mask>
            <g mask="url(#mask0_1187_10056)">
              <path d="M18.8999 -4.2002H56.0999V32.9998H18.8999V-4.2002Z" fill="#D9D9D9" />
            </g>
          </svg>
          <span className={styles.PartyOptionName}>Create a Lobby</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="25"
            viewBox="0 0 15 25"
            fill="none"
            className={styles.PartyOptionArrow}
          >
            <path
              d="M2.83784 24.5L0 21.7L9.32433 12.5L0 3.3L2.83784 0.5L15 12.5L2.83784 24.5Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
