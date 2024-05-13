
type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
  
  return (
    <header>
      <div className="flex">
        
      </div>
      <div className="block">
        {children}
      </div>

    </header>
  )
}