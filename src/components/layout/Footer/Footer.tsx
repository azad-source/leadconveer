import cx from 'clsx';
import type { MenuItem } from 'types/menu.types';

import styles from './Footer.module.scss';

interface IProps {
  className?: string;
}

const menuConfig: MenuItem[] = [
  { caption: 'Блог', link: '/' },
  { caption: 'Договор-оферта', link: '/' },
  { caption: 'Политика конфиденциальности', link: '/' },
  { caption: 'Соглашение об обработке данных', link: '/' },
  { caption: 'Вход в личный кабинет', link: '/' },
];

export const Footer: React.FC<IProps> = ({ className }) => {
  return (
    <footer className={cx(styles.root, className)}>
      <div className={styles.content}>
        <p className={styles.copyright}>
          © 2025 Все права защищены. Технология «Лид Конвейер» — лидогенерация для бизнеса.
        </p>

        <p className={styles.legal}>ООО «ДС-ГРУПП» ИНН 7801355174 ОГРН 1187847129425</p>

        <nav className={styles.links} aria-label='Дополнительные ссылки'>
          <ul>
            {menuConfig.map(({ caption, link }) => (
              <li key={caption}>
                <a href={link}>{caption}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};
