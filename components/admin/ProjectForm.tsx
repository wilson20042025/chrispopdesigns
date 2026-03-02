'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface ProjectFormProps {
    initialData?: any
    isEditing?: boolean
}

const PROJECT_TYPES = ['FABRICATION', 'FLOOR_PLAN', 'HOUSE_PLAN', 'RENDERING']
const SPEC_TYPES = ['AREA', 'MATERIAL', 'SCALE', 'CLIENT', 'OTHER']

export default function ProjectForm({ initialData, isEditing = false }: ProjectFormProps) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        type: 'HOUSE_PLAN',
        date: new Date().toISOString().split('T')[0],
        brief: '',
        specType: 'AREA',
        specValue: '',
    })

    useEffect(() => {
        if (initialData) {
            setFormData({
                ...initialData,
                date: new Date(initialData.date).toISOString().split('T')[0],
            })
        }
    }, [initialData])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const url = isEditing ? `/api/projects/${initialData.id}` : '/api/projects'
            const method = isEditing ? 'PUT' : 'POST'

            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                router.push('/admin/dashboard')
                router.refresh()
            }
        } catch (error) {
            console.error('Submission error:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Project Title</label>
                <input
                    required
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black outline-none transition-all"
                    placeholder="Enter project title..."
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <label className="text-sm font-semibold uppercase tracking-wider text-gray-500 block">Project Type</label>
                    <div className="grid grid-cols-1 gap-2">
                        {PROJECT_TYPES.map((t) => (
                            <label key={t} className="flex items-center space-x-3 cursor-pointer group">
                                <input
                                    type="radio"
                                    name="type"
                                    value={t}
                                    checked={formData.type === t}
                                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    className="w-4 h-4 text-black focus:ring-black border-gray-300"
                                />
                                <span className="text-sm text-gray-600 group-hover:text-black transition-colors">{t.replace('_', ' ')}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Completion Date</label>
                    <input
                        required
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black outline-none transition-all"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Project Brief</label>
                <textarea
                    required
                    rows={4}
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black outline-none transition-all resize-none"
                    placeholder="Describe the project objective and results..."
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-50 rounded-lg">
                <div className="space-y-4">
                    <label className="text-sm font-semibold uppercase tracking-wider text-gray-500 block">Spec Type</label>
                    <div className="grid grid-cols-1 gap-2">
                        {SPEC_TYPES.map((s) => (
                            <label key={s} className="flex items-center space-x-3 cursor-pointer group">
                                <input
                                    type="radio"
                                    name="specType"
                                    value={s}
                                    checked={formData.specType === s}
                                    onChange={(e) => setFormData({ ...formData, specType: e.target.value })}
                                    className="w-4 h-4 text-black focus:ring-black border-gray-300"
                                />
                                <span className="text-sm text-gray-600 group-hover:text-black transition-colors">{s}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Spec Value</label>
                    <input
                        required
                        type="text"
                        value={formData.specValue}
                        onChange={(e) => setFormData({ ...formData, specValue: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black outline-none transition-all bg-white"
                        placeholder="e.g. 250 sqm, Glass/Steel..."
                    />
                </div>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-gray-800 transition-all disabled:bg-gray-400"
            >
                {loading ? 'Processing...' : isEditing ? 'Update Project' : 'Create Project'}
            </button>
        </form>
    )
}
