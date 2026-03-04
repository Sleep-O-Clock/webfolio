import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import Sidebar from "@/src/components/layout/Sidebar";
import { SidebarProvider } from "@/src/contexts/SidebarContext";
import "@/src/lib/fontawesome";

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    return (
        <SidebarProvider>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar locale={locale} />
                <Sidebar />
                <main style={{ flex: 1 }}>
                    {children}
                </main>
                <Footer locale={locale} />
            </div>
        </SidebarProvider>
    );
}