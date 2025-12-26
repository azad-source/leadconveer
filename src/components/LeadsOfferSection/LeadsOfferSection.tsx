import StarIcon from 'assets/StarIcon.svg?react';
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
    text: 'Вы платите только за переданные\nи получение вами целевые Лиды\n— их контактные данные (телефон, Telegram, email)',
    image: offerImg1,
  },
  {
    title: 'Качественные лиды',
    text: 'Все передаваемые вам Лиды —\nэто потенциальные клиенты, которые искали ваш товар или услугу',
    image: offerImg2,
  },
  {
    title: 'Любой объём — на ваш выбор',
    text: 'Покупайте сколько контактов\nпотенциальных клиентов в месяц\n — сколько требуется вам!',
    image: offerImg3,
  },
  {
    title: 'Комплекс технологий',
    text: 'После расчёта стоимости Лидов\n и оплаты выбранного пакета —\nвы получите уникальный\nкод для своего сайта, который\nпозволит отслеживать контакты тех,\nкто не оставил заявку',
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

const OfferItem: React.FC<IOfferItemProps> = ({ data: item }) => {
  const { title, text, image } = item;
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
      <div></div>
    </div>
  );
};
