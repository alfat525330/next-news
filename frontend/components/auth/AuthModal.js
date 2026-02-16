'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'
import { registerUser } from '@/services/auth.service'

export default function AuthModal({ open, onClose }) {
  const router = useRouter()
  const [mode, setMode] = useState('login') 
  const [errors, setErrors] = useState({})
  const [generalError, setGeneralError] = useState('')
  // login form state
  const [loginData, setLoginData] = useState({
    identifier: '',
    password: ''
  })
  // signup form state
  const [signupData, setSignupData] = useState({
    name: '',
    username: '',
    email: '',
    contact_number: '',
    password: ''
  })

  /* -------------------- EFFECTS -------------------- */

  if (!open) return null

  /* -------------------- VALIDATION -------------------- */
  const validateLogin = () => {
    const err = {}
    if (!loginData.identifier) err.identifier = 'Username or Email is required'
    if (!loginData.password) err.password = 'Password is required'
    setErrors(err)
    return Object.keys(err).length === 0
  }

  const validateSignup = () => {
    const err = {}
    Object.entries(signupData).forEach(([key, value]) => {
      if (!value) err[key] = 'This field is required'
    })
    setErrors(err)
    return Object.keys(err).length === 0
  }

  /* -------------------- LOGIN HANDLERS -------------------- */
  const handleLogin = async () => {
    if (!validateLogin()) return
    
    const res = await signIn('credentials', {
      email: loginData.identifier,
      password: loginData.password,
      redirect: false
    })
    
    if (res?.error) {
      toast.error('Invalid credentials')
    } else {
      toast.success('Login Successfull')
      window.location.href = '/news'
      setTimeout(() => {
          router.push('/news')
      }, 200)
    }
  }
  
  /* -------------------- SIGNUP HANDLERS -------------------- */
  const handleSignup = async () => {
    if (!validateSignup()) return

    try {
      const {status, message} = await registerUser(signupData);
      console.log('response',status)
      if(status == 'true'){
        alert('if')
        setMode('login')
        setSignupData({
          name: '',
          username: '',
          email: '',
          contact_number: '',
          password: ''
        })
        toast.success(`${message}`);
      }else{
        toast.error(`${message}`);
      }
    } catch (err) {
      toast.error('Signup failed. Try again.')

    }
  }

  /* -------------------- UI -------------------- */
  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <h2 className="auth-title">
          {mode === 'login' ? 'Login' : 'Sign Up'}
        </h2>

        {mode === 'login' && (
          <div className="auth-form">
            <div className="auth-field">
              <input
                placeholder="Username or Email"
                value={loginData.identifier}
                onChange={e =>
                  setLoginData({ ...loginData, identifier: e.target.value })
                }
              />
              {errors.identifier && (
                <span className="auth-error">{errors.identifier}</span>
              )}
            </div>

            <div className="auth-field">
              <input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={e =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
              {errors.password && (
                <span className="auth-error">{errors.password}</span>
              )}
            </div>

            <button className="auth-primary" onClick={handleLogin}>
              Login
            </button>

            <p className="auth-switch">
              Don’t have an account?
              <span onClick={() => setMode('signup')}> Sign Up</span>
            </p>
          </div>
        )}

        {mode === 'signup' && (
          <div className="auth-form">
            {[
              { key: 'name', label: 'Full Name' },
              { key: 'username', label: 'Username' },
              { key: 'email', label: 'Email' },
              { key: 'contact_number', label: 'Contact Number' },
              { key: 'password', label: 'Password', type: 'password' }
            ].map(f => (
              <div className="auth-field" key={f.key}>
                <input
                  type={f.type || 'text'}
                  placeholder={f.label}
                  value={signupData[f.key]}
                  onChange={e =>
                    setSignupData({
                      ...signupData,
                      [f.key]: e.target.value
                    })
                  }
                />
                {errors[f.key] && (
                  <span className="auth-error">{errors[f.key]}</span>
                )}
              </div>
            ))}

            <button className="auth-primary" onClick={handleSignup}>
              Create Account
            </button>

            <p className="auth-switch">
              Already have an account?
              <span onClick={() => setMode('login')}> Login</span>
            </p>
          </div>
        )}

        <button className="auth-close-icon" onClick={onClose} aria-label="Close">
          ×
        </button>
      </div>
    </div>
  )
}

/* -------------------- STYLES -------------------- */
const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },

  modal: {
    background: '#fff',
    padding: '32px 28px',
    width: '380px',
    borderRadius: '10px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    textAlign: 'center'
  },

  heading: {
    marginBottom: '20px',
    fontSize: '28px',
    fontWeight: 500
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px'
  },

  field: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },

  error: {
    color: 'red',
    fontSize: '12px',
    marginTop: '4px'
  },

  errorCenter: {
    color: 'red',
    fontSize: '13px',
    marginBottom: '12px'
  },

  successCenter: {
    color: 'green',
    fontSize: '13px',
    marginBottom: '12px'
  },

  primaryBtn: {
    marginTop: '10px',
    padding: '10px',
    fontSize: '15px',
    cursor: 'pointer',
    borderRadius: '6px',
    border: '1px solid #444'
  },

  switchText: {
    fontSize: '14px',
    marginTop: '10px',
    cursor: 'pointer'
  },

  closeBtn: {
    marginTop: '18px',
    padding: '8px 18px',
    cursor: 'pointer'
  }
}
