import { useState } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import nequiLogo from '../assets/icons/nequi-logo.svg';
import byBancolombia from '../assets/icons/by-bancolombia.svg';
import otpIcon from '../assets/icons/new_otp_icon.svg';
import phoneIcon from '../assets/icons/phone-portrait-blue.svg';
import designGuide from '../../designs/inicioLogin.png';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [showGuide, setShowGuide] = useState(true);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  const formatPhone = (value: string) => {
    if (!value) return '';
    const parts = [];
    if (value.length > 0) parts.push(value.slice(0, 3));
    if (value.length > 3) parts.push(value.slice(3, 6));
    if (value.length > 6) parts.push(value.slice(6, 10));
    return parts.join(' ');
  };

  return (
    <IonPage>
      <IonContent fullscreen scrollY={false}>
        <div className="login-container">
          {/* Design Guide Overlay */}
          {showGuide && (
            <div className="design-guide-overlay">
              <img src={designGuide} alt="Design guide" />
            </div>
          )}
          <button
            className="guide-toggle-btn"
            onClick={() => setShowGuide(prev => !prev)}
          >
            {showGuide ? 'Ocultar guía' : 'Mostrar guía'}
          </button>
          {/* Top Bar */}
          <div className="login-top-bar">
            <div className="dynamic-key-badge">
              <img src={otpIcon} alt="OTP" className="otp-icon" />
              <div className="key-text">
                <span className="key-label">Clave dinamica</span>
                <span className="key-number">916 618</span>
              </div>
              <svg className="copy-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
            </div>
            <button className="help-btn">
              <span className="help-icon-circle">?</span>
              <span>Ayuda</span>
            </button>
          </div>

          {/* Logo Area */}
          <div className="login-logo-area">
            <img src={nequiLogo} alt="Logo" className="main-logo" />
          </div>

          {/* Bottom Section */}
          <div className="login-bottom">
            {/* Phone Input */}
            <div className="phone-input-container">
              <span className="phone-prefix">+57</span>
              <div className="phone-divider" />
              <input
                type="tel"
                className="phone-input"
                placeholder="300 000 0000"
                value={formatPhone(phone)}
                onChange={handlePhoneChange}
                inputMode="numeric"
              />
            </div>

            {/* Action Buttons */}
            <div className="login-actions">
              <button className="enter-btn">
                Entra
              </button>
              <button className="money-btn">
                <span>$</span>
              </button>
            </div>

            {/* Footer */}
            <div className="login-footer">
              <div className="footer-left">
                <img src={phoneIcon} alt="" className="footer-phone-icon" />
                <span>¿Cambiaste tu cel?</span>
              </div>
              <div className="footer-right">
                <img src={byBancolombia} alt="by Bancolombia" className="by-logo" />
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
