import Sidebar from './Sidebar'

function DashboardLayout({ activePage, onNavigate, onBack, children }) {
  return (
    <div className="min-h-screen flex">
      <Sidebar activePage={activePage} onNavigate={onNavigate} onBack={onBack} />
      <main className="flex-1 p-10 bg-crema/30">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
