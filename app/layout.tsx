import Nav from "@/components/Header.component"
import { HistoryProvider } from "store/history.context"
import { PatientProvider } from "store/patient.context"
import { Manrope } from "next/font/google"

import "../styles/global.css"

const inter = Manrope({
  subsets: ["latin"],
  display: "swap"
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#F6F7F8] min-w-[1280px]">
        <Nav />
        <main className="px-[1.125rem] mt-[6.75rem] pb-8">
          <HistoryProvider>
            <PatientProvider>{children}</PatientProvider>
          </HistoryProvider>
        </main>
      </body>
    </html>
  )
}
