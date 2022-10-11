import { Navigate, Route, Routes } from 'react-router-dom'
import { MarvelPage, DcPage, SearchPage, HeroPage } from '../../heroes'
import { Navbar } from '../../ui'


export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero" element={<HeroPage />} />

          {/* faltan: Search, hero by id */}

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>

    </>
  )
}
