import ProjectsContent from "./ProjectsContent"

export default async function ProjectsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    return <ProjectsContent locale={locale} />
}
