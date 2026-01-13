// ...existing code...
'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignIn() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const validate = () => {
        if (!email || !password) {
            setError('Email and password are required.')
            return false
        }
        const re = /\S+@\S+\.\S+/
        if (!re.test(email)) {
            setError('Please enter a valid email address.')
            return false
        }
        return true
    }

    const handleSubmit = async (e?: React.FormEvent) => {
        e?.preventDefault()
        setError(null)
        if (!validate()) return
        setLoading(true)

        try {
            const res = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            })

            const payload = await res.json()

            if (!res.ok) {
                setError(payload?.message || 'Sign in failed.')
                setLoading(false)
                return
            }

            // Persist token/session (adjust storage as needed for your app)
            if (typeof window !== 'undefined') {
                localStorage.setItem('authToken', payload.token)
            }

            // Redirect after successful sign in
            router.push('/')
        } catch (err) {
            console.error('Signin error', err)
            setError('Network error. Please try again.')
            setLoading(false)
        }
    }

    return (
        <div style={{ maxWidth: 420, margin: '48px auto', padding: 16 }}>
            <h1>Sign in</h1>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 12 }}>
                    <label style={{ display: 'block', marginBottom: 6 }}>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: 8, boxSizing: 'border-box' }}
                        autoComplete="email"
                    />
                </div>

                <div style={{ marginBottom: 12 }}>
                    <label style={{ display: 'block', marginBottom: 6 }}>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: 8, boxSizing: 'border-box' }}
                        autoComplete="current-password"
                    />
                </div>

                {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}

                <button type="submit" disabled={loading} style={{ padding: '8px 16px' }}>
                    {loading ? 'Signing in...' : 'Sign in'}
                </button>
            </form>
        </div>
    )
}