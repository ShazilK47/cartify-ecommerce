const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <h3 className="text-lg font-bold">Cartify</h3>
          <p className="mt-2 font-semibold">Subscribe</p>
          <p className="text-sm text-gray-400">Get 10% off your first order</p>
          <div className="mt-4 flex border border-gray-400 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 bg-black text-white focus:outline-none"
            />
            <button className="bg-white text-black px-4">&rarr;</button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold">Support</h3>
          <p className="text-sm text-gray-400 mt-2">
            111 Bijoy Sarani, Dhaka, DH 1515, Pakistan.
          </p>
          <p className="text-sm text-gray-400 mt-2">exclusive@gmail.com</p>
          <p className="text-sm text-gray-400 mt-2">+88015-88888-9999</p>
        </div>

        <div>
          <h3 className="text-lg font-bold">Account</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Login / Register
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Shop
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">Quick Link</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-gray-400 text-sm">
        &copy; Copyright Rimel 2022. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
