'use client'

import logo from '@/assets/logo.png'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import AuthModal from '@/components/auth/AuthModal'


export default function HomePage() {
  const { status } = useSession()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    if (status === 'authenticated') {
      window.location.href = '/news'
    } else {
      setOpen(true)
    }
  }
  return (
    <div id="home">
      <img src={logo.src} alt="A newspaper" />
      <h1>A News Site For The Next Generation</h1>
      <p>
        Next News is here to deliver you all the latest news - concise &
        unbiased!
      </p>

      <p>
        NextNews aims to provide you with the latest news in a concise and
        unbiased manner. We strive to deliver the news in a way that is easy to
        understand and to the point. We want to keep you informed without
        overwhelming you with unnecessary information.
      </p>

      <p>
        We employ a team of dedicated journalists who are committed to
        delivering the news in a fair and unbiased manner. Our team is
        passionate about keeping you informed and up to date with the latest
        news.
      </p>

      <div>
        <button onClick={handleClick}>Read the latest news</button>
        <AuthModal open={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
}
