'use client';

import { useState } from 'react';

import Copied from '../svgs/Copied';
import Copy from '../svgs/Copy';

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="hover:text-foreground inline-flex cursor-pointer items-center gap-1 transition-colors"
      aria-label={copied ? 'Email copied' : `Copy ${email}`}
    >
      <span>{email}</span>
      {copied ? <Copied className="size-3.5" /> : <Copy className="size-3.5" />}
    </button>
  );
}
