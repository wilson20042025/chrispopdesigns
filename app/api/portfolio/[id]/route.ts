import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const portfolioItem = await prisma.portfolio.findUnique({
            where: { id }
        })
        if (!portfolioItem) return NextResponse.json({ error: 'Item not found' }, { status: 404 })
        return NextResponse.json(portfolioItem)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch portfolio item' }, { status: 500 })
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const body = await request.json()
        const { slug, title, category, year, location, client, description, heroImage, details, gallery } = body

        const portfolioItem = await prisma.portfolio.update({
            where: { id },
            data: {
                slug,
                title,
                category,
                year,
                location,
                client,
                description,
                heroImage,
                details,
                gallery
            },
        })

        return NextResponse.json(portfolioItem)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update portfolio item' }, { status: 500 })
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        await prisma.portfolio.delete({
            where: { id },
        })
        return NextResponse.json({ message: 'Portfolio item deleted successfully' })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete portfolio item' }, { status: 500 })
    }
}
