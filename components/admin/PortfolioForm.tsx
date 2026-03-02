'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface PortfolioFormProps {
    initialData?: any
    isEditing?: boolean
}

export default function PortfolioForm({ initialData, isEditing = false }: PortfolioFormProps) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        slug: '',
        title: '',
        category: 'Architecture',
        year: new Date().getFullYear().toString(),
        location: '',
        client: '',
        description: '',
        heroImage: '',
        details: [{ label: '', value: '' }],
        gallery: [''],
    })

    useEffect(() => {
        if (initialData) {
            setFormData({
                ...initialData,
                details: typeof initialData.details === 'string' ? JSON.parse(initialData.details) : initialData.details || [{ label: '', value: '' }],
                gallery: initialData.gallery || [''],
            })
        }
    }, [initialData])

    const handleDetailChange = (index: number, field: 'label' | 'value', value: string) => {
        const newDetails = [...formData.details]
        newDetails[index][field] = value
        setFormData({ ...formData, details: newDetails })
    }

    const addDetail = () => {
        setFormData({ ...formData, details: [...formData.details, { label: '', value: '' }] })
    }

    const removeDetail = (index: number) => {
        const newDetails = formData.details.filter((_, i) => i !== index)
        setFormData({ ...formData, details: newDetails.length ? newDetails : [{ label: '', value: '' }] })
    }

    const handleGalleryChange = (index: number, value: string) => {
        const newGallery = [...formData.gallery]
        newGallery[index] = value
        setFormData({ ...formData, gallery: newGallery })
    }

    const addGalleryItem = () => {
        setFormData({ ...formData, gallery: [...formData.gallery, ''] })
    }

    const removeGalleryItem = (index: number) => {
        const newGallery = formData.gallery.filter((_, i) => i !== index)
        setFormData({ ...formData, gallery: newGallery.length ? newGallery : [''] })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const url = isEditing ? `/api/portfolio/${initialData.id}` : '/api/portfolio'
            const method = isEditing ? 'PUT' : 'POST'

            // Clean data
            const cleanedData = {
                ...formData,
                details: formData.details.filter(d => d.label && d.value),
                gallery: formData.gallery.filter(g => g.trim() !== ''),
            }

            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cleanedData),
            })

            if (response.ok) {
                router.push('/admin/dashboard')
                router.refresh()
            } else {
                const err = await response.json()
                alert(err.error || 'Something went wrong')
            }
        } catch (error) {
            console.error('Submission error:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Title</label>
                    <input
                        required
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black outline-none transition-all"
                        placeholder="e.g. Nouveau Pavilion"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Slug</label>
                    <input
                        required
                        type="text"
                        value={formData.slug}
                        onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black outline-none transition-all"
                        placeholder="e.g. nouveau-pavilion"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                    <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Category</label>
                    <input
                        required
                        type="text"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black outline-none transition-all"
                        placeholder="Architecture"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Year</label>
                    <input
                        required
                        type="text"
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black outline-none transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Client</label>
                    <input
                        required
                        type="text"
                        value={formData.client}
                        onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black outline-none transition-all"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Location</label>
                <input
                    required
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black outline-none transition-all"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Hero Image URL</label>
                <input
                    required
                    type="text"
                    value={formData.heroImage}
                    onChange={(e) => setFormData({ ...formData, heroImage: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black outline-none transition-all"
                    placeholder="https://..."
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Description</label>
                <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black outline-none transition-all resize-none"
                    placeholder="Project description..."
                />
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Details (Label/Value)</label>
                    <button type="button" onClick={addDetail} className="text-xs font-bold uppercase text-primary hover:underline">+ Add Detail</button>
                </div>
                {formData.details.map((detail, index) => (
                    <div key={index} className="flex gap-4 items-end">
                        <div className="flex-1 space-y-1">
                            <input
                                type="text"
                                placeholder="Label (e.g. Material)"
                                value={detail.label}
                                onChange={(e) => handleDetailChange(index, 'label', e.target.value)}
                                className="w-full px-4 py-2 text-sm rounded-lg border border-gray-200 outline-none"
                            />
                        </div>
                        <div className="flex-1 space-y-1">
                            <input
                                type="text"
                                placeholder="Value (e.g. Glass)"
                                value={detail.value}
                                onChange={(e) => handleDetailChange(index, 'value', e.target.value)}
                                className="w-full px-4 py-2 text-sm rounded-lg border border-gray-200 outline-none"
                            />
                        </div>
                        <button type="button" onClick={() => removeDetail(index)} className="p-2 text-red-400 hover:text-red-600">×</button>
                    </div>
                ))}
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Gallery Image URLs</label>
                    <button type="button" onClick={addGalleryItem} className="text-xs font-bold uppercase text-primary hover:underline">+ Add Image</button>
                </div>
                {formData.gallery.map((url, index) => (
                    <div key={index} className="flex gap-4 items-center">
                        <input
                            type="text"
                            placeholder="https://..."
                            value={url}
                            onChange={(e) => handleGalleryChange(index, e.target.value)}
                            className="w-full px-4 py-2 text-sm rounded-lg border border-gray-200 outline-none"
                        />
                        <button type="button" onClick={() => removeGalleryItem(index)} className="p-2 text-red-400 hover:text-red-600">×</button>
                    </div>
                ))}
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-gray-800 transition-all disabled:bg-gray-400"
            >
                {loading ? 'Processing...' : isEditing ? 'Update Portfolio Item' : 'Create Portfolio Item'}
            </button>
        </form>
    )
}
