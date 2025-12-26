import Logo from 'assets/LOGO.svg?react';
import telegramIcon from 'assets/telegram_icon.png';
import whatsappIcon from 'assets/whatsapp_icon.png';
import cx from 'clsx';
import { AnimatePresence, motion, type MotionProps } from 'framer-motion';
import { useState } from 'react';
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

const animationProps: MotionProps = {
  initial: { left: '-100%' },
  animate: { left: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export const Header: React.FC<IProps> = ({ className }) => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const closeBurgerMenu = () => {
    setShowBurgerMenu(false);
  };

  return (
    <header className={cx(styles.root, className)}>
      <div className={styles.burgerMenuButton} onClick={() => setShowBurgerMenu(true)}>
        <div />
        <div />
        <div />
      </div>

      <a href='/' className={styles.logo}>
        <Logo />
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

      <AnimatePresence>
        {showBurgerMenu && (
          <div className={styles.burgerMenuOverlay} onClick={closeBurgerMenu}>
            <motion.nav
              {...animationProps}
              className={styles.burgerMenu}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.burgerMenu__title}>Меню</div>
              <ul>
                {menuConfig.map(({ caption, link }) => (
                  <li key={caption}>
                    <a href={link}>{caption}</a>
                  </li>
                ))}
              </ul>
              <br />
              <hr />
              <Contacts className={styles.burgerMenu__contacts} />
            </motion.nav>
          </div>
        )}
      </AnimatePresence>

      <Contacts className={styles.contacts} />
    </header>
  );
};

const Contacts = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <a
        href={WHATSAPP_LINK}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Написать в WhatsApp'
        className={styles.socialIcon}
      >
        <img src={whatsappIcon} alt='whatsapp' />
      </a>
      <a
        href={TELEGRAM_LINK}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Написать в Telegram'
        className={styles.socialIcon}
      >
        <img src={telegramIcon} alt='telegram' />
      </a>
      <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className={styles.phoneLink}>
        {PHONE_NUMBER}
      </a>
    </div>
  );
};
