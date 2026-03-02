import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params
        const portfolioItem = await prisma.portfolio.findUnique({
            where: { slug }
        })
        if (!portfolioItem) return NextResponse.json({ error: 'Item not found' }, { status: 404 })
        return NextResponse.json(portfolioItem)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch portfolio item' }, { status: 500 })
    }
}
