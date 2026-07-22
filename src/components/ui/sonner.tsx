"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-[#111827] dark:text-zinc-100 font-sans text-xs rounded-[8px] shadow-lg p-3.5",
          success:
            "!bg-white !text-emerald-700 !border-emerald-200 dark:!bg-zinc-900 dark:!text-emerald-400 dark:!border-emerald-900",
          error:
            "!bg-white !text-red-700 !border-red-200 dark:!bg-zinc-900 dark:!text-red-400 dark:!border-red-900",
          info:
            "!bg-white !text-blue-700 !border-blue-200 dark:!bg-zinc-900 dark:!text-blue-400 dark:!border-blue-900",
          warning:
            "!bg-white !text-amber-700 !border-amber-200 dark:!bg-zinc-900 dark:!text-amber-400 dark:!border-amber-900",
          loading:
            "!bg-white !text-zinc-800 !border-zinc-200 dark:!bg-zinc-900 dark:!text-zinc-200 dark:!border-zinc-800",
        },
      }}
      icons={{
        success: <CircleCheckIcon className="size-4 text-emerald-600 dark:text-emerald-400" />,
        info: <InfoIcon className="size-4 text-blue-600 dark:text-blue-400" />,
        warning: <TriangleAlertIcon className="size-4 text-amber-600 dark:text-amber-400" />,
        error: <OctagonXIcon className="size-4 text-red-600 dark:text-red-400" />,
        loading: <Loader2Icon className="size-4 animate-spin text-[#E30613]" />,
      }}
      {...props}
    />
  )
}

export { Toaster }
