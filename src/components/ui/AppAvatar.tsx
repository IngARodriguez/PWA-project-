import React from 'react';
import { IonAvatar } from '@ionic/react';

interface AppAvatarProps {
  src?: string;
  alt?: string;
  size?: 'small' | 'medium' | 'large';
  initials?: string;
}

const sizeMap = {
  small: '32px',
  medium: '48px',
  large: '80px',
};

export const AppAvatar: React.FC<AppAvatarProps> = ({
  src,
  alt = 'Avatar',
  size = 'medium',
  initials,
}) => {
  const dimension = sizeMap[size];

  return (
    <IonAvatar style={{ width: dimension, height: dimension }}>
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--ion-color-primary)',
            color: 'var(--ion-color-primary-contrast)',
            fontSize: size === 'large' ? '1.5rem' : '1rem',
            fontWeight: 600,
            borderRadius: '50%',
          }}
        >
          {initials?.toUpperCase() || '?'}
        </div>
      )}
    </IonAvatar>
  );
};
