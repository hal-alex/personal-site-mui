import React, { useContext, useState } from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [showLongVersion, setShowLongVersion] = useState(false)

  const handleChange = () => {
    setShowLongVersion(!showLongVersion)
    console.log(showLongVersion)
    console.log("test")
  }

  return (
    <AppContext.Provider
      value={{
        showLongVersion,
        setShowLongVersion,
        handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
