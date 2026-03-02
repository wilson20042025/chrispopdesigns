import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
    try {
        const projects = await prisma.project.findMany({
            orderBy: {
                date: 'desc',
            },
        })
        return NextResponse.json(projects)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { type, date, title, brief, specType, specValue } = body

        const project = await prisma.project.create({
            data: {
                type,
                date: new Date(date),
                title,
                brief,
                specType,
                specValue,
            },
        })

        return NextResponse.json(project)
    } catch (error) {
        console.error('Project creation error:', error)
        return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
    }
}
