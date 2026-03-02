'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock } from 'lucide-react'

export default function AdminLoginPage() {
    const router = useRouter()
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        // Simple demo auth - in production use NextAuth or similar
        if (password === 'admin123') {
            router.push('/admin/dashboard')
        } else {
            setError('Invalid credentials')
        }
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white p-12 rounded-2xl shadow-2xl">
                <div className="flex justify-center mb-8">
                    <div className="p-4 bg-primary text-white rounded-full">
                        <Lock size={32} />
                    </div>
                </div>

                <div className="text-center mb-12">
                    <h1 className="text-3xl font-black uppercase tracking-tighter mb-2">Admin Portal.</h1>
                    <p className="text-muted text-sm uppercase tracking-widest font-bold">Authorized Personnel Only</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Access Key</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-4 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-black outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    {error && <p className="text-red-500 text-xs font-bold uppercase tracking-wider">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-5 rounded-lg font-black uppercase tracking-[0.3em] hover:bg-primary transition-all shadow-xl"
                    >
                        Authenticate
                    </button>
                </form>

                <p className="mt-8 text-center text-gray-400 text-[10px] uppercase font-bold tracking-widest">
                    &copy; 2026 ChrisPopDesigns Inc.
                </p>
            </div>
        </div>
    )
}
