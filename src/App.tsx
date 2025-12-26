import './App.module.scss';

import styles from 'App.module.scss';
import { LeadConveyorPricing } from 'components/LeadConveyorPricing/LeadConveyorPricing';
import { LeadsOfferSection } from 'components/LeadsOfferSection/LeadsOfferSection';
import { Gap } from 'components/shared/Gap/Gap';

import HeroSection from './components/HeroSection/HeroSection';
import { Layout } from './components/layout/Layout/Layout';

function App() {
  return (
    <Layout>
      <Gap flexDirection='column' gap={120} width='100%' marginBottom={120}>
        <HeroSection />
        <div className={styles.content}>
          <LeadsOfferSection />
          <LeadConveyorPricing />
        </div>
      </Gap>
    </Layout>
  );
}

export default App;
