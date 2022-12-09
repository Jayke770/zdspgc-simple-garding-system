import { Navbar, Page, Link as Klink, List, NavbarBackLink } from "konsta/react"
import Link from "next/link"
import { Grid } from 'gridjs-react'
import "gridjs/dist/theme/mermaid.css"
import { faker } from '@faker-js/faker'
const data = Array.from({ length: 100 }).map((_, i) => [i + 1, Math.floor(Math.random() * 99999), faker.name.firstName(), faker.name.middleName(), faker.name.lastName(), faker.date.past().toISOString(), faker.animal.bird(), faker.date.past().getFullYear(), faker.date.past().getFullYear()])
export default function Students() {
    return (
        <Page>
            <Navbar
                className=" k-color-brand-primary"
                left={
                    <Link href={"/sudo"}>
                        <NavbarBackLink className=" k-color-brand-primary" />
                    </Link>
                }
                title="Students" />
            <div className="p-4">
                <Grid
                    data={data}
                    columns={["No.", 'Student ID', 'Firstname', 'Middle Name', 'Lastname', 'Birthday', 'Section', 'Year', 'Created']}
                    search={true}
                    resizable={true}
                    pagination={{
                        enabled: true,
                        limit: 10
                    }}
                    className={{
                        table: 'w-full'
                    }} />
            </div>
        </Page>
    )
}