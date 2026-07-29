import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from '@/layouts/RootLayout';
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/AboutPage';
import BlogPage from '@/pages/BlogPage';
import CareersPage from '@/pages/CareersPage';
import CompanyPage from '@/pages/CompanyPage';
import ContactPage from '@/pages/ContactPage';
import CustomersPage from '@/pages/CustomersPage';
import DevelopersPage from '@/pages/DevelopersPage';
import PlatformPage from '@/pages/PlatformPage';
import PricingPage from '@/pages/PricingPage';
import PrivacyPage from '@/pages/PrivacyPage';
import ResearchPage from '@/pages/ResearchPage';
import SecurityPage from '@/pages/SecurityPage';
import ServicesPage from '@/pages/ServicesPage';
import SolutionsPage from '@/pages/SolutionsPage';
import TermsPage from '@/pages/TermsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="company" element={<CompanyPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="developers" element={<DevelopersPage />} />
          <Route path="platform" element={<PlatformPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="research" element={<ResearchPage />} />
          <Route path="security" element={<SecurityPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="terms" element={<TermsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
