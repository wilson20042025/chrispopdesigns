import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const body = await request.json()
        const { type, date, title, brief, specType, specValue } = body

        const project = await prisma.project.update({
            where: { id },
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
        return NextResponse.json({ error: 'Failed to update project' }, { status: 500 })
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        await prisma.project.delete({
            where: { id },
        })
        return NextResponse.json({ message: 'Project deleted successfully' })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 })
    }
}
