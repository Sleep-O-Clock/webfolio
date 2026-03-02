import "../styles/globals.css";
import "../lib/fontawesome";

export const metadata = {
    title: "Vincent Lavallée",
    description: "Cumputer Engineer Student",
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
