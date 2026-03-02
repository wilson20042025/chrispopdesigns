import ProjectForm from '@/components/admin/ProjectForm'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewProjectPage() {
    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
                <Link
                    href="/admin/dashboard"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-black transition-colors mb-8 group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Dashboard
                </Link>

                <h1 className="text-4xl font-black uppercase tracking-tighter mb-12">Register New Project.</h1>

                <ProjectForm />
            </div>
        </div>
    )
}
