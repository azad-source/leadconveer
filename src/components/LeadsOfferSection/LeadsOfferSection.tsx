import StarIcon from 'assets/GradientStarIcon.svg?react';
import cx from 'clsx';

import styles from './LeadsOfferSection.module.scss';
import offerImg1 from './Offer1.png';
import offerImg2 from './Offer2.png';
import offerImg3 from './Offer3.png';
import offerImg4 from './Offer4.png';

interface IProps {
  className?: string;
}

interface IOfferData {
  title: string;
  text: string;
  image: string;
}

const offersConfig: IOfferData[] = [
  {
    title: 'Оплата за результат',
    text: 'Вы платите только за переданные и получение вами целевые Лиды — их контактные данные (телефон, Telegram, email)',
    image: offerImg1,
  },
  {
    title: 'Качественные лиды',
    text: 'Все передаваемые вам Лиды — это потенциальные клиенты, которые искали ваш товар или услугу',
    image: offerImg2,
  },
  {
    title: 'Любой объём — на ваш выбор',
    text: 'Покупайте сколько контактов потенциальных клиентов в месяц  — сколько требуется вам!',
    image: offerImg3,
  },
  {
    title: 'Комплекс технологий',
    text: 'После расчёта стоимости Лидов и оплаты выбранного пакета — вы получите уникальный код для своего сайта, который позволит отслеживать контакты тех, кто не оставил заявку',
    image: offerImg4,
  },
];

export const LeadsOfferSection: React.FC<IProps> = ({ className }) => {
  return (
    <div className={cx(styles.root, className)}>
      <h2 className={styles.title}>
        Завалим ваш отдел продаж
        <br />
        <span className={styles.highlight}>целевыми Лидами</span>
      </h2>

      <div className={styles.offers}>
        {offersConfig.map((item) => {
          return <OfferItem key={item.title} data={item} />;
        })}
      </div>
    </div>
  );
};

interface IOfferItemProps {
  data: IOfferData;
}

const OfferItem: React.FC<IOfferItemProps> = ({ data }) => {
  const { title, text, image } = data;
  return (
    <div className={styles.offerCard}>
      <div className={styles.cardInfo}>
        <div className={styles.cardInfo__title}>
          <span>{title}</span>
          <StarIcon className={styles.starIcon} />
        </div>
        <div className={styles.cardInfo__text}>{text}</div>
      </div>
      <div className={styles.cardImg}>
        <img src={image} />
      </div>
    </div>
  );
};
