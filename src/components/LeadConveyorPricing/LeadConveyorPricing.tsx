import CheckIcon from 'assets/CheckIcon.svg?react';
import StarIcon from 'assets/StarIcon.svg?react';
import cx from 'clsx';
import { Button } from 'components/shared/Button/Button';
import { formatSpacedNumber } from 'utils/formatNumber';

import styles from './LeadConveyorPricing.module.scss';

interface IProps {
  className?: string;
}

interface ITariffData {
  name: string;
  leadCount: number;
  price: number;
  description: string;
  conditions: string[];
}

const tariffsConfig: ITariffData[] = [
  {
    name: 'Старт',
    leadCount: 50,
    price: 22500,
    description:
      'Стартовый пакет для тех, кто хочет купить Лидов со своего сайта и повысить свои продаж',
    conditions: ['50 Лидов', '450 ₽ за один Лид', 'Получение за 5–7 дней'],
  },
  {
    name: 'Стандарт',
    leadCount: 100,
    price: 40000,
    description:
      'Оптимальный пакет Лидов для любого отдела продаж и для повышения продаж своих товаров или услуг',
    conditions: [
      '100 Лидов',
      '400 ₽ за один Лид',
      'Получение за 7–14 дней',
      'Возможность показа Лидам рекламы через Яндекс.Директ',
    ],
  },
  {
    name: 'Премиум',
    leadCount: 300,
    price: 90000,
    description:
      'Максимум целевых Лидов в ближайшее время для вашего бизнеса которые уже завтра могут стать Вашими клиентами!',
    conditions: [
      '300 Лидов',
      '300 ₽ за один Лид',
      'Получение за 14–30 дней',
      'Возможность показа Лидам рекламы через Яндекс.Директ',
      'Готовый и конверсионный скрипт продаж целевым Лидам',
    ],
  },
];

export const LeadConveyorPricing: React.FC<IProps> = ({ className }) => {
  return (
    <div className={cx(styles.root, className)}>
      <h2 className={styles.title}>
        Стоимость технологий
        <br />
        <span className={styles.highlight}>«Лид Конвейер»</span>
      </h2>

      <div className={styles.description}>
        <p>
          Оптимальные тарифы и цены на получение готовых Лидов и заявок
          <br />с вашего сайта, без переплаты и абонентской платы
        </p>
      </div>

      <div className={styles.tariffs}>
        {tariffsConfig.map((item) => {
          return <TariffItem key={item.name} data={item} />;
        })}
      </div>
    </div>
  );
};

interface ITariffItemProps {
  data: ITariffData;
}

const TariffItem: React.FC<ITariffItemProps> = ({ data }) => {
  const { name, leadCount, price, description, conditions } = data;
  return (
    <div className={styles.tariffCard}>
      <div className={styles.tariffCard__tariff}>
        <span className={styles.tariffName}>{name}</span>
        <StarIcon className={styles.starIcon} />
      </div>
      <div className={styles.tariffCard__price}>
        {leadCount} готовых лидов за&nbsp;
        <span className={styles.priceValue}>{formatSpacedNumber(price)}&nbsp;₽</span>
      </div>
      <div className={styles.tariffCard__text}>{description}</div>
      <div className={styles.tariffCard__conditions}>
        <ul>
          {conditions.map((i) => {
            return (
              <li key={i}>
                <CheckIcon className={styles.checkIcon} />
                <span className={styles.condition}>{i}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <Button className={styles.tariffCard__buyBtn} width='100%' use='primary' onClick={() => {}}>
        КУПИТЬ
      </Button>
    </div>
  );
};
