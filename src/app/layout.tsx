import "../styles/globals.css";
import "../lib/fontawesome";

export const metadata = {
    title: "Vincent Lavallée",
    description: "Computer Engineer Student",
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-black text-white min-h-screen flex flex-col">
                {children}
            </body>
        </html>
    );
}
