export default function Nav() {
    return (
        <nav className="flex flex-row justify-between items-center p-4 max-w-7xl mx-auto">
            {/* Logo */}
            <div className="flex flex-row items-center gap-2">
              <div className="bg-white rounded-full h-5 w-5">
              </div>
              <p>Christian</p>
            </div>

            {/* Menu */}
            <div className="flex flex-row items-center gap-4">
              <p>
                Home
              </p>
              <p>
                About
              </p>
              <p>
                Contact
              </p>
            </div>
        </nav>
    );
}