import { Button } from 'components/shared/Button/Button';
import React from 'react';
import type { MenuItem } from 'types/menu.types';

import heroImg from './banner.png';
import styles from './HeroSection.module.scss';
import MoneyMouthFace from './MoneyMouthFace.svg?react';

const menuConfig: MenuItem[] = [
  { caption: 'Лидогенерация в b2b', link: '/' },
  { caption: 'Биржа лидов', link: '/' },
  { caption: 'Сервис по Лидгену', link: '/' },
  { caption: 'Лиды для производства', link: '/' },
  { caption: 'Клиенты для бизнеса', link: '/' },
  { caption: 'Определить телефон посетителя сайта', link: '/' },
];

const HeroSection: React.FC = () => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>
              <span className={styles.highlight}>Лидогенерация</span>
              <br />
              для бизнеса
            </h1>
            <div className={styles.subtitle}>
              <p>
                Покупайте только целевые лиды
                <br /> по фиксированной цене от 300 ₽
              </p>
              <MoneyMouthFace width={72} height={72} />
            </div>
            <Button use='primary' width='100%' onClick={() => {}}>
              ВЫБРАТЬ ПАКЕТ ЛИДОВ
            </Button>
          </div>
          <div className={styles.heroImage}>
            <img src={heroImg} alt='Женщина работает с ноутбуком — получает лиды' loading='lazy' />
          </div>
        </div>

        <nav className={styles.categories} aria-label='Категории'>
          <ul>
            {menuConfig.map(({ caption, link }) => (
              <li key={caption}>
                <a href={link}>{caption}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;
