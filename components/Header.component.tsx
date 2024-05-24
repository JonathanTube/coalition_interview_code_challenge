"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const menus = [
  {
    name: "Overview",
    icon: "/nav/overview.svg"
  },
  {
    name: "Patients",
    icon: "/nav/patients.svg"
  },
  {
    name: "Schedule",
    icon: "/nav/schedule.svg"
  },
  {
    name: "Message",
    icon: "/nav/message.svg"
  },
  {
    name: "Transactions",
    icon: "/nav/transactions.svg"
  }
]

const Nav: React.FC = () => {
  return (
    <header className="fixed top-0 p-[1.125rem] min-w-full">
      <div className="h-[4.5rem] rounded-full bg-white px-8 flex items-center justify-between min-w-full">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Tech Care"
            priority
            width={0}
            height={0}
            style={{ width: "210.58px", height: "48px" }}
          />
          <nav className="ml-5 xl:ml-52">
            <ul className="menu">
              {menus.map((menu) => (
                <li
                  key={menu.name}
                  className={"Patients" === menu.name ? "bg-active" : ""}
                >
                  <Image
                    src={menu.icon}
                    alt={menu.name}
                    sizes="100vw"
                    width="0"
                    height={17}
                    style={{ width: "auto", height: "auto" }}
                  />
                  <Link href="#" className="text-sm">
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center">
          <Image
            src="/avatar.png"
            alt="avatar"
            width={44}
            height={44}
            className="rounded-full invisible 2xl:visible"
          />
          <div className="ml-2 border-r pr-3 mr-3 min-w-32 text-sm invisible 2xl:visible">
            <div className="text-primary text-nowrap overflow-ellipsis">
              Dr.Jose Simmons
            </div>
            <div className="text-gray-500 text-nowrap overflow-ellipsis">
              General Practitioner
            </div>
          </div>

          <Image
            src="/icon/setting.svg"
            alt="setting"
            width={0}
            height={0}
            style={{ width: "20px", height: "20px" }}
          />
          <Image
            src="/icon/three-dots.svg"
            alt="setting"
            width={0}
            height={0}
            style={{ width: "4px", height: "18px" }}
            className="ml-3"
          />
        </div>
      </div>
    </header>
  )
}

export default Nav
