// Home Page - imports all sections for the homepage
// كل المكونات الخاصة بالصفحة الرئيسية

import Hero from './components/Hero/Hero';
import LogosShowcase from './components/LogosShowcase/LogosShowcase';
import CirclesSolutions from './components/CirclesSolutions/CirclesSolutions';
import SolutionsSection from './components/SolutionsSection/SolutionsSection';
import PremiumStats from './components/PremiumStats/PremiumStats';
import StackingPanels from './components/StackingPanels/StackingPanels';
import './styles/Home.css';

function Home() {
  return (
    <>
      <Hero />
      <LogosShowcase />
      <CirclesSolutions />
      <SolutionsSection />
      <PremiumStats />
      <StackingPanels />
    </>
  );
}

export default Home;