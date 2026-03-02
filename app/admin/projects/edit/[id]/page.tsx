import prisma from '@/lib/prisma'
import ProjectForm from '@/components/admin/ProjectForm'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function EditProjectPage({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const project = await prisma.project.findUnique({
        where: { id }
    })

    if (!project) {
        notFound()
    }

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

                <h1 className="text-4xl font-black uppercase tracking-tighter mb-12">Edit Project Details.</h1>

                <ProjectForm initialData={project} isEditing />
            </div>
        </div>
    )
}
