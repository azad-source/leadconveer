import './App.module.scss';

import styles from 'App.module.scss';
import { LeadConveyorPricing } from 'components/LeadConveyorPricing/LeadConveyorPricing';
import { LeadsOfferSection } from 'components/LeadsOfferSection/LeadsOfferSection';

import HeroSection from './components/HeroSection/HeroSection';
import { Layout } from './components/layout/Layout/Layout';

function App() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <HeroSection />
        <div className={styles.content}>
          <LeadsOfferSection />
          <LeadConveyorPricing />
        </div>
      </div>
    </Layout>
  );
}

export default App;
