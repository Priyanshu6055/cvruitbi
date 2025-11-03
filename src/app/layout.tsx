import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "CVRUITBI",
  description: "Empowering Innovation & Startups",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Tailwind via CDN (add this first) */}
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.4/dist/tailwind.min.css"
          rel="stylesheet"
        />

        {/* ✅ Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* ✅ Basic Theme Styling */}
        <style>{`
          :root {
            --primary: #16b6cf;
          }
          body {
            font-family: 'Poppins', sans-serif;
            background-color: white;
            color: #1f2937;
            margin: 0;
            padding: 0;
          }
          .btn-primary {
            background-color: var(--primary);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            font-weight: 500;
            transition: all 0.3s ease;
          }
          .btn-primary:hover {
            background-color: #13a3bb;
          }
        `}</style>
      </head>

      <body className="min-h-screen flex flex-col font-[Poppins]">
        {/* ✅ Navbar */}
        <Navbar />

        {/* ✅ Main content */}
        <main className="flex-grow">{children}</main>

        {/* ✅ Footer */}
        <Footer />
      </body>
    </html>
  );
}
