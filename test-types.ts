
import { PrismaClient } from '@prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

const pool = new Pool()
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function check() {
    console.log(prisma.portfolio)
}
check()
