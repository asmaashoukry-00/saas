import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import HRPage from './components/HR/HRPage';
import Finance from './components/Finance/Finance';
import Talent from './components/Talent/Talent';
import Solutions from './components/Solutions/Solutions';

import EmployeeFiles from './components/HR/pages/EmployeeFiles';
import Payroll from './components/HR/pages/Payroll';
import Attendance from './components/HR/pages/Attendance';
import Compliance from './components/HR/pages/Compliance';
import SalesInvoices from './components/Finance/pages/SalesInvoices';
import Accounting from './components/Finance/pages/Accounting';
import Inventory from './components/Finance/pages/Inventory';
import Purchases from './components/Finance/pages/Purchases';
import FinancialReports from './components/Finance/pages/FinancialReports';
import Recruitment from './components/Talent/pages/Recruitment';
import Performance from './components/Talent/pages/Performance';
import Training from './components/Talent/pages/Training';
import CareerPaths from './components/Talent/pages/CareerPaths';
import OneCircles from './components/Solutions/pages/OneCircles';
import MobileApp from './components/Solutions/pages/MobileApp';
import DataAnalytics from './components/Solutions/pages/DataAnalytics';

import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/hr" element={<HRPage />} />
        <Route path="/hr/employee-files" element={<EmployeeFiles />} />
        <Route path="/hr/payroll" element={<Payroll />} />
        <Route path="/hr/attendance" element={<Attendance />} />
        <Route path="/hr/compliance" element={<Compliance />} />
        
        <Route path="/finance" element={<Finance />} />
        <Route path="/finance/sales-invoices" element={<SalesInvoices />} />
        <Route path="/finance/accounting" element={<Accounting />} />
        <Route path="/finance/inventory" element={<Inventory />} />
        <Route path="/finance/purchases" element={<Purchases />} />
        <Route path="/finance/reports" element={<FinancialReports />} />
        
        <Route path="/talent" element={<Talent />} />
        <Route path="/talent/recruitment" element={<Recruitment />} />
        <Route path="/talent/performance" element={<Performance />} />
        <Route path="/talent/training" element={<Training />} />
        <Route path="/talent/career-paths" element={<CareerPaths />} />
        
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/one-circles" element={<OneCircles />} />
        <Route path="/solutions/mobile-app" element={<MobileApp />} />
        <Route path="/solutions/data-analytics" element={<DataAnalytics />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;