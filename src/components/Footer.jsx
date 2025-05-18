const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-2">Book of Answer</h4>
            <p className="text-gray-300">Your digital companion for finding answers to life's questions.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">&copy; {currentYear} Book of Answer. All Rights Reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
