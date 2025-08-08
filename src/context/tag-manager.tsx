"use client"

import { createContext, useEffect } from "react"
import TagManager from "react-gtm-module"

export const TagManagerContext = createContext({})

export const TagManagerProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-PZ2BTKW8",
    }

    TagManager.initialize(tagManagerArgs)
  }, [])
  return (
    <TagManagerContext.Provider value={{}}>
      {children}
    </TagManagerContext.Provider>
  )
}
