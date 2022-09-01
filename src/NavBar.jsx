import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div style={{
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: "#FAFAFA",
        width: '100vw',
        padding: '20px 10%',
        boxSizing: 'border-box'
    }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/totals">Totales</NavLink>
        <NavLink to="/products">Productos</NavLink>
        <NavLink to="/categories">Categorías</NavLink>
        <NavLink to="/last-user">Ultimo usuario</NavLink>
    </div>
  )
}

export default NavBar