const Navbar = () => {
  return (
    <div className="bg-gray-800/80 text-white py-4">
      <div className="container flex justify-between items-center p-4 text-white">
        <div className="logo">logo</div>
        <nav>
          <ul className="list-none flex gap-6">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
