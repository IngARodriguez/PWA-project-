import { useState, useEffect } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import nequiLogo from '../assets/icons/nequi-logo.svg';
import byBancolombia from '../assets/icons/by-bancolombia.svg';
import otpIcon from '../assets/icons/new_otp_icon.svg';
import phoneIcon from '../assets/icons/phone-portrait-blue.svg';
import copyIcon from '../assets/icons/copy-icon.svg';
import questionIcon from '../assets/icons/question-icon.svg';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [phone, setPhone] = useState('');

  const randomOtp = () => {
    const n = Math.floor(100000 + Math.random() * 900000).toString();
    return `${n.slice(0, 3)} ${n.slice(3)}`;
  };
  const [otpCode, setOtpCode] = useState(randomOtp);

  useEffect(() => {
    const interval = setInterval(() => setOtpCode(randomOtp()), 44000);
    return () => clearInterval(interval);
  }, []);

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
          {/* Top Bar */}
          <div className="login-top-bar">
            <div className="dynamic-key-badge">
              <svg className="otp-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="13" stroke="#fbe5f2" strokeWidth="4"/>
                <circle
                  cx="16" cy="16" r="13"
                  stroke="#da0081"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="81.68"
                  strokeDashoffset="81.68"
                  className="otp-progress"
                  transform="rotate(-90 16 16)"
                />
              </svg>
              <div className="key-text">
                <span className="key-label">Clave dinámica</span>
                <span className="key-number">{otpCode}</span>
              </div>
              <img src={copyIcon} alt="Copiar" className="copy-icon" />
            </div>
            <button className="help-btn">
              <img src={questionIcon} alt="?" className="help-icon-circle" />
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
