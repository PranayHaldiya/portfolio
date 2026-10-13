import { ImageResponse } from 'next/og';

import { site } from '@/config/site';

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        background: '#0a0a0a',
        color: '#fafafa',
      }}
    >
      <div style={{ fontSize: 72, fontWeight: 700 }}>{site.name}</div>
      <div style={{ fontSize: 36, color: '#a1a1aa', marginTop: 16 }}>
        {`${site.role} · ${site.location}`}
      </div>
      <div
        style={{
          fontSize: 30,
          color: '#d4d4d8',
          marginTop: 48,
          maxWidth: 980,
          lineHeight: 1.4,
        }}
      >
        Web and mobile apps, backends, AI agents and Web3 (EVM and Solana).
        Built Roger Ads and an iMessage agent with 630+ users at Roger (YC S24).
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: 48,
          fontSize: 26,
          color: '#4ade80',
        }}
      >
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: 9999,
            background: '#4ade80',
            marginRight: 16,
          }}
        />
        {site.status}
      </div>
    </div>,
    size,
  );
}
