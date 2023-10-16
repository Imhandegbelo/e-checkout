import logo from "../assets/images/logo.svg"

export default function Navbar() {
    return (
        <nav className="flex p-4 border-b-2 w-full">
            <img src={logo} alt="logo" className="" />
        </nav>
    )
}
