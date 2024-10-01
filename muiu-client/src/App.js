import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './pages/Layout';
import Main from './pages/Main';
import Login from './pages/Login';
import Join from './pages/Join';
import MyPage from './pages/MyPage';
import MindCheck from './pages/MindCheck';
import MyDiary from './pages/MyDiary';
import MindColumn from './pages/MindColumn';
import DisasterMentalHealthManual from './pages/DisasterMentalHealthManual';
import DMHMDefinition from './pages/DMHMDefinition';
import DMHMDefinition2 from './pages/DMHMDefinition2';
import DisasterGuide from './pages/DisasterGuide';
import Fund from './pages/Fund';
import FundDetail from './pages/FundDetail';
import FundPayment from './pages/FundPayment';
import FundPaymentSystem from './pages/FundPaymentSystem';
import HospitalShelterInfo from './pages/HospitalShelterInfo';
import HumanCounseling from './pages/HumanCounseling';
import AICounseling from './pages/AICounseling';
import Agree from './pages/Agree';
import JoinSuccess from './pages/JoinSuccess';
import NewConsultation from './pages/NewConsultation';
import ExistingConsultation from './pages/ExistingConsultation';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/main" />} />
          <Route path="main" element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="join" element={<Join />} />
          <Route path="agree" element={<Agree/>} />
          <Route path="join-success" element={<JoinSuccess/>} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="mind-check" element={<MindCheck />} />
          <Route path="human-counseling" element={<HumanCounseling />} />
          <Route path="ai-counseling" element={<AICounseling />} />
          <Route path="my-diary" element={<MyDiary />} />
          <Route path="mind-column" element={<MindColumn />} />
          <Route path="disaster-mental-health-manual" element={<DisasterMentalHealthManual />} />
          <Route path="DMHMDefinition" element={<DMHMDefinition/>} />
          <Route path="DMHMDefinition2" element={<DMHMDefinition2/>} />
          <Route path="disaster-guide" element={<DisasterGuide />} />
          <Route path="fund" element={<Fund />} />
          <Route path="fund-detail" element={<FundDetail />} />
          <Route path="fund-payment" element={<FundPayment />} />
          <Route path="fund-payment-system" element={<FundPaymentSystem />} />
          <Route path="hospital-shelter-info" element={<HospitalShelterInfo />} />
          <Route path="/new-consultation" element={<NewConsultation />} />
          <Route path="/existing-consultation" element={<ExistingConsultation />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
