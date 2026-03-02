import PortfolioForm from '@/components/admin/PortfolioForm'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import prisma from '@/lib/prisma'
import { notFound } from 'next/navigation'

export default async function EditPortfolioPage({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const portfolioItem = await prisma.portfolio.findUnique({
        where: { id }
    })

    if (!portfolioItem) {
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

                <h1 className="text-4xl font-black uppercase tracking-tighter mb-12">Edit Portfolio Item.</h1>

                <PortfolioForm initialData={portfolioItem} isEditing={true} />
            </div>
        </div>
    )
}
