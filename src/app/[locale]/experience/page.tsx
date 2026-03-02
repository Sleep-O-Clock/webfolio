import ExperienceContent from "./ExperienceContent"

export default async function ExperiencePage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    return <ExperienceContent locale={locale} />
}
