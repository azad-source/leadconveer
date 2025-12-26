import logo from 'assets/LOGO.png';
import telegramIcon from 'assets/telegram_icon.png';
import whatsappIcon from 'assets/whatsapp_icon.png';
import cx from 'clsx';
import type { MenuItem } from 'types/menu.types';

import styles from './Header.module.scss';

interface IProps {
  className?: string;
}

const menuConfig: MenuItem[] = [
  { caption: 'Как это работает', link: '/' },
  { caption: 'Цена', link: '/' },
  { caption: 'Отзывы', link: '/' },
  { caption: 'Контакты', link: '/' },
];

const PHONE_NUMBER = '+7 495 118-32-82';
const TELEGRAM_LINK = 'https://t.me/ваш_ник';
const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER.replace(/\D/g, '')}`;

export const Header: React.FC<IProps> = ({ className }) => {
  return (
    <header className={cx(styles.root, className)}>
      <a href='/' className={styles.logo}>
        <img src={logo} />
      </a>

      <nav className={styles.mainNav} aria-label='Основная навигация'>
        <ul>
          {menuConfig.map(({ caption, link }) => (
            <li key={caption}>
              <a href={link}>{caption}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.contacts}>
        <a
          href={WHATSAPP_LINK}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Написать в WhatsApp'
          className='icon-link'
        >
          <img src={whatsappIcon} alt='whatsapp' />
        </a>
        <a
          href={TELEGRAM_LINK}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Написать в Telegram'
          className='icon-link'
        >
          <img src={telegramIcon} alt='telegram' />
        </a>
        <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className={styles.phoneLink}>
          {PHONE_NUMBER}
        </a>
      </div>
    </header>
  );
};
