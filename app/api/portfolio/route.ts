import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
    try {
        const portfolio = await prisma.portfolio.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        })
        return NextResponse.json(portfolio)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch portfolio items' }, { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { slug, title, category, year, location, client, description, heroImage, details, gallery } = body

        const portfolioItem = await prisma.portfolio.create({
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
        console.error('Portfolio creation error:', error)
        return NextResponse.json({ error: 'Failed to create portfolio item' }, { status: 500 })
    }
}
